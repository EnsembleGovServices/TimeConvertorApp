<?php

/*
Plugin Name:	NASA Time Converter App
Plugin URI:		https://www.ensembleconsultancy.com/
Description:	NASA event importer Plugin
Version:		1.0.0
Author:			Ensemble
Author URI:		https://www.ensembleconsultancy.com/
Text Domain:     nasa-tca
Domain Path:     /languages
*/

defined('ABSPATH') or die();

define('MY_PLUGIN_DIR_PATH', plugin_dir_path(__FILE__));
define('MY_PLUGIN_DIR_URL', plugin_dir_url(__FILE__));

// Get the Country Related Data of the JSON file.
$timezone_datalist = file_get_contents(MY_PLUGIN_DIR_PATH . '/raw-time-zones.json');
// Convert to array 
$timezone_data = json_decode($timezone_datalist, true);
$GLOBALS['timezone_data'] = json_decode($timezone_datalist, true);

add_action('wp_enqueue_scripts', 'sd_nasa_enqueue_files', 11);
function sd_nasa_enqueue_files()
{
	if (is_single() && get_post_type() == 'event') {
		wp_enqueue_style('svgMap-css',  MY_PLUGIN_DIR_URL . 'assets/css/svgMap.min.css');
		wp_enqueue_script('svgMap',  MY_PLUGIN_DIR_URL . 'assets/js/svgMap.min.js', array('jquery'), '', false);
		wp_enqueue_script('html2canvas',  MY_PLUGIN_DIR_URL . 'assets/js/html2canvas.min.js', array('jquery'), '', false);
	}
	if (is_page_template('templates/template-event_listing.php')  ||  is_single() && get_post_type() == 'event') {
		wp_enqueue_style('all_event_style', MY_PLUGIN_DIR_URL . 'assets/css/plugin_event_style.css');
		wp_enqueue_script('plugin_custom', MY_PLUGIN_DIR_URL . 'assets/js/plugin_custom.js', array('jquery'), '1.0.0', false);
		wp_localize_script(
			'plugin_custom',
			'userdata',
			array(
				'theme_uri' => get_stylesheet_directory_uri(),
				'ajax_url' => admin_url('admin-ajax.php'),
				'site_url' => site_url(),
			)
		);
	}
}

function sd_nasa_selectively_enqueue_admin_script($hook)
{
	if (get_post_type() == 'event') {
		wp_enqueue_style('select2-css', MY_PLUGIN_DIR_URL . 'assets/css/select2.min.css');
		wp_enqueue_script('adm-select2-js', MY_PLUGIN_DIR_URL . 'assets/js/select2.min.js', array('jquery'), '1.0.0', true);
	}
}
add_action('admin_enqueue_scripts', 'sd_nasa_selectively_enqueue_admin_script');

// Create Event & meta field 
include_once(MY_PLUGIN_DIR_PATH . '/event-custom-post-type.php');

// Add "Custom" template to page event listing template section.
function sd_nasa_add_template_to_select($post_templates, $wp_theme, $post, $post_type)
{
	// Add custom template named template-event_listing.php to select dropdown 
	$post_templates['templates/template-event_listing.php'] = __('Event Listing');
	return $post_templates;
}
add_filter('theme_page_templates', 'sd_nasa_add_template_to_select', 10, 4);

/**
 * Check if current page has our custom template. Try to load
 * template from theme directory and if not exist load it 
 * from root plugin directory.
 */
function sd_nasa_load_plugin_template($template)
{
	if (get_page_template_slug() === 'templates/template-event_listing.php') {
		if ($theme_file = locate_template(array('templates/template-event_listing.php'))) {
			$template = $theme_file;
		} else {
			$template = plugin_dir_path(__FILE__) . 'templates/template-event_listing.php';
		}
	}

	if ($template == '') {
		throw new \Exception('No template found');
	}

	return $template;
}
add_filter('template_include', 'sd_nasa_load_plugin_template');

function tz_sel_options($timezone_data)
{
	$html_opt = "";
	foreach ($timezone_data as $timezone_d) {

		$timezone_name = $timezone_d['name'];
		$countryName = $timezone_d['countryName'];
		$tz_cn = $timezone_name . ", " . $countryName;
		$html_opt .= "<option value='" . $timezone_name . "'>" . esc_html($tz_cn, 'nasa-tca') . "</option>";
	}

	return $html_opt;
}

function converToTzFormat($date_ch = "", $toTz = '', $fromTz = '', $toFormat = '')
{
	// timezone by php
	$date = new DateTime($date_ch, new DateTimeZone($fromTz));
	$date->setTimezone(new DateTimeZone($toTz));
	$date_ch = $date->format($toFormat);
	return $date_ch;
}

function sd_nasa_fetchtimezone_data($data_timezone, $return_data)
{
	foreach ($GLOBALS['timezone_data'] as $timezone_d) {
		if ($timezone_d['name'] == $data_timezone) {
			return $timezone_d[$return_data];
		} else {
			foreach ($timezone_d['group'] as $timezone_d_g) {
				if ($timezone_d_g == $data_timezone) {
					return $timezone_d[$return_data];
				}
			}
		}
	}
}

function sd_nasa_searchregion()
{
	$term = sanitize_text_field($_REQUEST['term']);
	$returnResult = array();
	if (!empty($term)) {
		global $wpdb;
		$preparedsql = $wpdb->prepare("SELECT * FROM `cityandzones` WHERE `city` LIKE %s OR `state` LIKE %s order by (city = %s) desc, length(city) LIMIT 5;", '%' . $wpdb->esc_like($term) . '%','%' . $wpdb->esc_like($term) . '%',$wpdb->esc_like($term));
		$results = $wpdb->get_results($preparedsql);
		if ($results) {
			foreach ($results as $singleRow) {
				$temparray['id'] = $singleRow->timezone;
				$temparray['text'] =  $singleRow->city . ', ' . $singleRow->state . ', ' . $singleRow->country;
				$returnResult['results'][] = $temparray;
			}
		}
	}
	if (!isset($returnResult['results'])) {
		$returnResult['results'] = '';
	}
	$returnResult['pagination'] = array("more" => false);
	echo json_encode($returnResult);
	die();
}

add_action('wp_ajax_nopriv_searchregion', 'sd_nasa_searchregion');
add_action('wp_ajax_searchregion', 'sd_nasa_searchregion');
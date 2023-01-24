<?php

/**
 * The public-facing functionality of the plugin.
 *
 * @link       https://www.ensembleconsultancy.com
 * @since      1.0.0
 *
 * @package    Nasa_Time_Converter_App
 * @subpackage Nasa_Time_Converter_App/public
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the public-facing stylesheet and JavaScript.
 *
 * @package    Nasa_Time_Converter_App
 * @subpackage Nasa_Time_Converter_App/public
 * @author     Ensemble <info@ensembleconsultancy.com>
 */
class Nasa_Time_Converter_App_Public {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of the plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;

	}

	/**
	 * Register the stylesheets for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Nasa_Time_Converter_App_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Nasa_Time_Converter_App_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */
		if (is_page_template('templates/template-event_listing.php')  ||  is_single() && get_post_type() == 'event') {
			wp_enqueue_style('all_event_style', plugin_dir_url( __FILE__ ) . 'css/plugin_event_style.css');
		}
		wp_enqueue_style( 'select-2-style', plugin_dir_url( __FILE__ ) . 'css/select2.min.css', array(), $this->version, 'all' );
		//wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/nasa-time-converter-app-public.css', array(), $this->version, 'all' );
	}

	/**
	 * Register the JavaScript for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Nasa_Time_Converter_App_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Nasa_Time_Converter_App_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */
		if (is_single() && get_post_type() == 'event') {
			wp_enqueue_script('html2canvas',  plugin_dir_url( __FILE__ ) . 'js/html2canvas.min.js', array( 'jquery' ), $this->version, false );
			wp_enqueue_script('amchart',  plugin_dir_url( __FILE__ ) . 'js/amcharts/index.js', array( 'jquery' ), $this->version, false );
			wp_enqueue_script('amchartmap',  plugin_dir_url( __FILE__ ) . 'js/amcharts/map.js', array( 'jquery','amchart' ), $this->version, false );
			wp_enqueue_script('worldtimelaw',  plugin_dir_url( __FILE__ ) . 'js/amcharts/worldTimeZonesLow.js', array( 'jquery','amchart' ), $this->version, false );
			wp_enqueue_script('wordltimearealaw',  plugin_dir_url( __FILE__ ) . 'js/amcharts/worldTimeZoneAreasLow.js', array( 'jquery','amchart' ), $this->version, false );
			wp_enqueue_script('amchartanimation',  plugin_dir_url( __FILE__ ) . 'js/amcharts/Animated.js', array( 'jquery','amchart' ), $this->version, false );
		}
		if (is_page_template('templates/template-event_listing.php')  ||  is_single() && get_post_type() == 'event') {
			wp_enqueue_script('plugin_custom', plugin_dir_url( __FILE__ ) . 'js/plugin_custom.js', array( 'jquery' ), $this->version, false);
			wp_localize_script('plugin_custom','userdata', array( 'theme_uri' => get_stylesheet_directory_uri(), 'ajax_url' => admin_url('admin-ajax.php'), 'site_url' => site_url()));
		}
		wp_enqueue_script('select2',  plugin_dir_url( __FILE__ ) . 'js/select2.min.js', array( 'jquery' ), $this->version, false );
	}

}

// Get the Country Related Data of the JSON file.
$timezone_datalist = file_get_contents(plugin_dir_url( __FILE__ ) . 'raw-time-zones.json');
// Convert to array 
$timezone_data = json_decode($timezone_datalist, true);

$GLOBALS['timezone_data'] = json_decode($timezone_datalist, true);

/**
 * Add "Custom" template to page event listing template section.
 *
 * @since    1.0.0
*/

function nasa_add_template_to_select($post_templates, $wp_theme, $post, $post_type)
{
	// Add custom template named template-event_listing.php to select dropdown
	$post_templates['templates/template-event_listing.php'] = __('Event Listing');
	return $post_templates;
}
add_filter('theme_page_templates', 'nasa_add_template_to_select', 10, 4);

/**
 * Check if current page has our custom template. Try to load
 * template from theme directory and if not exist load it 
 * from root plugin directory.
 */
function nasa_load_plugin_template($template)
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
add_filter('template_include', 'nasa_load_plugin_template');

function include_template_function($template_path)
{
    $cust_posttype = 'event';
    if (get_post_type() ==  $cust_posttype) {

        if (is_single() && is_singular()) {

            // checks if the file exists in the theme first,
            // otherwise serve the file from the plugin
            if ($theme_file = locate_template(array('single-event.php'))) {
                $template_path = $theme_file;
            } else {
                $template_path = plugin_dir_path(__FILE__) . 'templates/single-event.php';
            }
        }
    }
    return $template_path;
}
add_filter('template_include', 'include_template_function', 1);

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

function fetchtimezone_data($data_timezone, $return_data)
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


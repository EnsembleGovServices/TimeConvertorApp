<?php

/**
 * The admin-specific functionality of the plugin.
 *
 * @link       https://www.ensembleconsultancy.com
 * @since      1.0.0
 *
 * @package    Nasa_Time_Converter_App
 * @subpackage Nasa_Time_Converter_App/admin
 */

/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    Nasa_Time_Converter_App
 * @subpackage Nasa_Time_Converter_App/admin
 * @author     Ensemble <info@ensembleconsultancy.com>
 */
class Nasa_Time_Converter_App_Admin {

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
	 * @param      string    $plugin_name       The name of this plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;

	}

	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {
		wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/nasa-time-converter-app-admin.css', array(), $this->version, 'all' );
		
        if (get_post_type() == 'event') {
			wp_enqueue_style('select2-css', plugin_dir_url( __FILE__ ) . 'css/select2.min.css' , array(), $this->version, 'all' );
		}		
	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {
        
		if (get_post_type() == 'event') {
			wp_enqueue_script('adm-select2-js', plugin_dir_url( __FILE__ ) . 'js/select2.min.js', array('jquery'), $this->version, false);
		}
	}

}

/**
	* Register the custom post type at the time of activating plugin
	*
	* @since    1.0.0
*/	
function nasa_custom_post_type()
{
    $labels = array(
        'name'                  =>   __('Events', 'nasa-tca'),
        'singular_name'         =>   __('Event', 'nasa-tca'),
        'add_new_item'          =>   __('Add New Event', 'nasa-tca'),
        'all_items'             =>   __('All Events', 'nasa-tca'),
        'edit_item'             =>   __('Edit Event', 'nasa-tca'),
        'new_item'              =>   __('New Event', 'nasa-tca'),
        'view_item'             =>   __('View Event', 'nasa-tca'),
        'not_found'             =>   __('No Events Found', 'nasa-tca'),
        'not_found_in_trash'    =>   __('No Events Found in Trash', 'nasa-tca'),
        'search_items' => __('Search Event', 'nasa-tca'),
        'add_new' =>  __('Add New', 'nasa-tca'),
        'parent_item_colon' => '',
    );

    $supports = array(
        'title',
        'editor',
        'revisions',
        'thumbnail',
        'excerpt',
        'author',
        'page-attributes'
    );

    $args = array(
        'label'         =>   __('Events', 'nasa-tca'),
        'labels'        =>   $labels,
        'description'   =>   __('A list of upcoming events', 'nasa-tca'),
        'public'        =>   true,
        'show_in_menu'  =>   true,
        'menu_icon'     =>   'dashicons-calendar-alt',
        'has_archive'   =>   false,
        'rewrite' => array('slug' => 'event'),
        'supports'      =>   $supports,
        'show_ui' => true,
        'capability_type' => 'post',
        'hierarchical' => false,
        'query_var' => true,
    );
    register_post_type('event', $args);
}
add_action('init', 'nasa_custom_post_type');

/**
	* Add custom fieds in custom post type at the time of activating
	* Show already added fields data on edit post 
    *
	* @since    1.0.0
*/	

add_action('admin_init', 'my_admin_eve_meta');
function my_admin_eve_meta()
{
    add_meta_box(
        'event_meta_box',
        'Event Details',
        'display_event_meta_box',
        'event',
        'normal',
        'high'
    );
}

function display_event_meta_box($event_d)
{
    // Get the Country Related Data of the JSON file.
    $timezone_datalist = file_get_contents(plugin_dir_url( __FILE__ ) . 'raw-time-zones.json');
    // Convert to array 
    $timezone_data = json_decode($timezone_datalist, true);

        // Retrieve Event meta Data
        $event_location = esc_html(get_post_meta($event_d->ID, 'event_location', true));
        $event_participate = esc_html(get_post_meta($event_d->ID, 'event_participate', true));
        $event_nasa_launch = esc_html(get_post_meta($event_d->ID, 'event_nasa_launch', true));
        $event_nasa_broadcast = esc_html(get_post_meta($event_d->ID, 'event_nasa_broadcast', true));
        $event_d_type =  get_post_meta($event_d->ID, 'event_d_type', true);
        $event_d_timezone =  get_post_meta($event_d->ID, 'event_d_timezone', true);
    ?>
        <table>
            <tr>
                <td ><?php esc_html_e('Event Location', 'nasa-tca'); ?> </td>
                <td><input type="text" size="80" name="event_d_location_name" value="<?php echo $event_location; ?>" /></td>
            </tr>
            <tr>
                <td class="width-100"><?php esc_html_e('How to Participate', 'nasa-tca'); ?> </td>
                <td><input type="text" size="80" placeholder="<?php esc_attr_e('Enter the link to registration'); ?>" name="event_d_participate_name" value="<?php echo $event_participate; ?>" /></td>
            </tr>
            <tr>
                <td class="width-100"><?php esc_html_e('Local Time & Date of Event Launch', 'nasa-tca'); ?> </td>
                <td><input type="datetime-local" placeholder="<?php esc_attr_e('Enter the link to registration'); ?>" name="event_d_nasa_launch" value="<?php echo $event_nasa_launch; ?>" /></td>
            </tr>
            <tr>
                <td class="width-100"><?php esc_html_e('Local Time & Date of Event Broadcast', 'nasa-tca'); ?> </td>
                <td><input type="datetime-local" placeholder="<?php esc_attr_e('Enter the link to registration'); ?>" name="event_d_nasa_broadcast" value="<?php echo $event_nasa_broadcast; ?>" /></td>
            </tr>
            <tr>
                <td class="event-text"><?php esc_html_e('Type of Event ', 'nasa-tca'); ?> </td>
                <td>
                    <select class="type_of_event" name="type_of_event">
                        <option value="launch" <?php selected($event_d_type, 'launch'); ?>><?php esc_html_e('Launch', 'nasa-tca'); ?></option>
                        <option value="broadcast" <?php selected($event_d_type, 'broadcast'); ?>><?php esc_html_e('Broadcast', 'nasa-tca'); ?></option>
                        <option value="test" <?php selected($event_d_type, 'test'); ?>><?php esc_html_e('Test', 'nasa-tca'); ?></option>
                        <option value="interaction" <?php selected($event_d_type, 'interaction'); ?>><?php esc_html_e('Interaction', 'nasa-tca'); ?></option>
                    </select>
                </td>
            </tr>
            <tr>
                <td class="time_zone_nasa"><?php esc_html_e('Time zone of Event', 'nasa-tca'); ?> </td>
                <td>
                    <select class="timezone_of_event_opt" name="timezone_of_event">
        
                        <?php foreach ($timezone_data as $timezone_d) { 
                               $timezone_name = $timezone_d['name'];
                               $countryName = $timezone_d['countryName'];
                               $tz_cn = $timezone_name .", ".$countryName;
                            ?>
                            <option value="<?php _e($timezone_name); ?>" <?php selected($event_d_timezone, $timezone_name); ?>><?php _e($tz_cn, 'nasa-tca'); ?></option>
                        <?php   } ?>
                    </select>
                </td>
            </tr>
        </table>
    <?php
}

/**
	* On save post save custom field data ib db.
	* On save post updaate the custom field data if fields has already data in it.
    *
	* @since    1.0.0
*/	

add_action('save_post', 'add_events_fields', 10, 2);
function add_events_fields($event_d_id,  $event_d)
{
    global $post;
    if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
        return;
    }
    // Check post type for event
    if ($event_d->post_type == 'event') {

        // Store data in post meta table if present in post data
        if (isset($_POST['event_d_location_name'])) {
            update_post_meta($event_d_id, 'event_location', $_POST['event_d_location_name']);
        }

        if (isset($_POST['event_d_participate_name'])) {
            update_post_meta($event_d_id, 'event_participate', $_POST['event_d_participate_name']);
        }

        if (isset($_POST['event_d_nasa_launch']) && $_POST['event_d_nasa_launch'] != '') {
            update_post_meta($event_d_id, 'event_nasa_launch', $_POST['event_d_nasa_launch']);
        }

        if (isset($_POST['event_d_nasa_broadcast']) && $_POST['event_d_nasa_broadcast'] != '') {
            update_post_meta($event_d_id, 'event_nasa_broadcast', $_POST['event_d_nasa_broadcast']);
        }

        if (isset($_POST['type_of_event'])) {
            update_post_meta($event_d_id, 'event_d_type', $_POST['type_of_event']);
        }

        if (isset($_POST['timezone_of_event'])) {
            update_post_meta($event_d_id, 'event_d_timezone', $_POST['timezone_of_event']);
        }
    }
}
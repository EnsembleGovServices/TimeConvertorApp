<?php
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
$timezone_datalist = file_get_contents(MY_PLUGIN_DIR_PATH . '/raw-time-zones.json');
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
            <td style="width: 100%"><?php esc_html_e('Event Location', 'nasa-tca'); ?> </td>
            <td><input type="text" size="80" name="event_d_location_name" value="<?php echo $event_location; ?>" /></td>
        </tr>
        <tr>
            <td style="width: 100%"><?php esc_html_e('How to Participate', 'nasa-tca'); ?> </td>
            <td><input type="text" size="80" placeholder="<?php esc_attr_e('Enter the link to registration'); ?>" name="event_d_participate_name" value="<?php echo $event_participate; ?>" /></td>
        </tr>
        <tr>
            <td style="width: 100%"><?php esc_html_e('Local Time & Date of Nasa Launch', 'nasa-tca'); ?> </td>
            <td><input type="datetime-local" placeholder="<?php esc_attr_e('Enter the link to registration'); ?>" name="event_d_nasa_launch" value="<?php echo $event_nasa_launch; ?>" /></td>
        </tr>
        <tr>
            <td style="width: 100%"><?php esc_html_e('Local Time & Date of Nasa broadcast', 'nasa-tca'); ?> </td>
            <td><input type="datetime-local" placeholder="<?php esc_attr_e('Enter the link to registration'); ?>" name="event_d_nasa_broadcast" value="<?php echo $event_nasa_broadcast; ?>" /></td>
        </tr>
        <tr>
            <td style="width: 150px"><?php esc_html_e('Type of Event ', 'nasa-tca'); ?> </td>
            <td>
                <select style="width: 100px" name="type_of_event">
                    <option value="launch" <?php selected($event_d_type, 'launch'); ?>><?php esc_html_e('Launch', 'nasa-tca'); ?></option>
                    <option value="broadcast" <?php selected($event_d_type, 'broadcast'); ?>><?php esc_html_e('Broadcast', 'nasa-tca'); ?></option>
                    <option value="test" <?php selected($event_d_type, 'test'); ?>><?php esc_html_e('Test', 'nasa-tca'); ?></option>
                    <option value="interaction" <?php selected($event_d_type, 'interaction'); ?>><?php esc_html_e('Interaction', 'nasa-tca'); ?></option>
                </select>
            </td>
        </tr>
        <tr>
            <td style="width: 150px"><?php esc_html_e('Time zone of nasa event', 'nasa-tca'); ?> </td>
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
    <script>
        jQuery(document).ready(function($) {
            $('.timezone_of_event_opt').select2();
        });
    </script>
<?php
}
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

add_filter('template_include', 'include_template_function', 1);

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
                $template_path = plugin_dir_path(__FILE__) . 'single-event.php';
            }
        }
    }

    return $template_path;
}
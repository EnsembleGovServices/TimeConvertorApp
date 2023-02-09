<?php

/**
 *
 * @link              https://github.com/EnsembleGovServices/TimeConvertorApp
 * @since             1.0.0
 * @package           Nasa_Time_Converter_App
 *
 * @wordpress-plugin
 * Plugin Name:       Nasa Time Converter App
 * Plugin URI:        https://github.com/EnsembleGovServices/TimeConvertorApp
 * Description:       Plugin provides an option to add events along with the timezone convert option.
 * Version:           1.0.4
 * Author:            Ensemble
 * Author URI:        https://www.ensembleconsultancy.com
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       nasa-tca
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Currently plugin version.
 */
define( 'NASA_TIME_CONVERTER_APP_VERSION', '1.0.1' );

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-nasa-time-converter-app-activator.php
 */
function activate_nasa_time_converter_app() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-nasa-time-converter-app-activator.php';
	Nasa_Time_Converter_App_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-nasa-time-converter-app-deactivator.php
 */
function deactivate_nasa_time_converter_app() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-nasa-time-converter-app-deactivator.php';
	Nasa_Time_Converter_App_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_nasa_time_converter_app' );
register_deactivation_hook( __FILE__, 'deactivate_nasa_time_converter_app' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-nasa-time-converter-app.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_nasa_time_converter_app() {

	$plugin = new Nasa_Time_Converter_App();
	$plugin->run();

}
run_nasa_time_converter_app();

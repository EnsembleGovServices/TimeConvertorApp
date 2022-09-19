<?php

/**
 * Fired during plugin deactivation
 *
 * @link       https://www.ensembleconsultancy.com
 * @since      1.0.0
 *
 * @package    Nasa_Time_Converter_App
 * @subpackage Nasa_Time_Converter_App/includes
 */

/**
 * Fired during plugin deactivation.
 *
 * This class defines all code necessary to run during the plugin's deactivation.
 *
 * @since      1.0.0
 * @package    Nasa_Time_Converter_App
 * @subpackage Nasa_Time_Converter_App/includes
 * @author     Ensemble <info@ensembleconsultancy.com>
 */
class Nasa_Time_Converter_App_Deactivator {

	/**
	 * drop the table created for the city and state database.
	 *
	 * @since    1.0.0
	 */
	public static function deactivate() {

		require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );

		$sql = "DROP TABLE IF EXISTS cityandzones";
		$wpdb->query($sql);

	}

}

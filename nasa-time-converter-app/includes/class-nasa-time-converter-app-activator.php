<?php

/**
 * Fired during plugin activation
 *
 * @link       https://www.ensembleconsultancy.com
 * @since      1.0.0
 *
 * @package    Nasa_Time_Converter_App
 * @subpackage Nasa_Time_Converter_App/includes
 */

/**
 * Fired during plugin activation.
 *
 * This class defines all code necessary to run during the plugin's activation.
 *
 * @since      1.0.0
 * @package    Nasa_Time_Converter_App
 * @subpackage Nasa_Time_Converter_App/includes
 * @author     Ensemble <info@ensembleconsultancy.com>
 */
class Nasa_Time_Converter_App_Activator {

	/**
	 *
	 * @since    1.0.0
	 */
	public static function activate() {
		flush_rewrite_rules(true);
	}

}

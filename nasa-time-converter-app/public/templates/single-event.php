<?php

/*Template Name: single-event
 */

get_header();

/* Start the Loop */
while (have_posts()) :
    the_post();

    //Default Event TimeZone 
    $event_nasa_tz_c = get_post_meta(get_the_ID(), 'event_d_timezone', true);

    // Check set all event cookie TimeZone
    if (isset($_COOKIE['timezoneset_cookie'])) {
        $eve_cookie_store_state = $_COOKIE['timezoneset_cookie'];
    } else {
        // Check set single event cookie TimeZone
        if (isset($_COOKIE['nevent-' . get_the_ID()]) && !empty($_COOKIE['nevent-' . get_the_ID()])) {
            $eve_cookie_store_state = $_COOKIE['nevent-' . get_the_ID()];
            $eve_cookie_store_id = get_the_ID();
        }
    }

    if (isset($eve_cookie_store_state)) {
        //  TimeZone replace / to , (comma) This used in svg map location
        $selected_location = str_replace('/', ', ', $eve_cookie_store_state);
    }

    // Event Location not found than TimeZone Display (This used in svg map location)
    $event_location = get_post_meta(get_the_ID(), 'event_location', true);
    if (!empty($event_location)) {
        $def_location_svg = $event_location;
    } else {
        $def_location_svg = str_replace('/', ', ', $event_nasa_tz_c);
    }

    // event launch date
    $event_nasa_launch_c = get_post_meta(get_the_ID(), 'event_nasa_launch', true);
    // Event broadcasr date
    $event_nasa_broadcast_c = get_post_meta(get_the_ID(), 'event_nasa_broadcast', true);

    // Type of the Event
    $type_of_event = get_post_meta(get_the_ID(), 'event_d_type', true);

    // Registration Link
    $event_participate = get_post_meta(get_the_ID(), 'event_participate', true);

    // Event Disclaimer
    $event_disclaim = get_post_meta(get_the_ID(), 'event_disclaimer', true);
?>
    <div class="single_event_wrap">
        <div class="container">
            <article id="event-<?php echo get_the_ID(); ?>" <?php post_class(); ?>>
                <div class="single_event_cookie_store">
                    <?php

                    $Object = new DateTime();
                    $Object->setTimezone(new DateTimeZone($event_nasa_tz_c));
                    $Object->modify('-1 day');
                    $DateAndTime = $Object->format("d-m-Y H:i");
                    if (!empty($event_nasa_launch_c)) {
                        $event_date = new DateTime($event_nasa_launch_c, new DateTimeZone($event_nasa_tz_c));
                        if ($event_date->format("d-m-Y H:i") <= $DateAndTime) {
                            echo "<div class='tip-icon-success' >Event already completed</div>";
                        }
                    } else {
                        if (!empty($event_nasa_broadcast_c)) {
                            $event_date = new DateTime($event_nasa_broadcast_c, new DateTimeZone($event_nasa_tz_c));
                            if ($event_date->format("d-m-Y H:i") <= $DateAndTime) {
                                echo "<div class='tip-icon-success' >Event already completed</div>";
                            }
                        }
                    }
                    ?>
                    <!-- Heading launch time fetch with defualt/converted TimeZone -->
                    <h1 class="eve_heading heading_launch">
                        <?php if (!empty($event_nasa_launch_c)) {
                            esc_html_e('NASA’s ' . get_the_title() . ' launch will be at ', 'nasa-tca');
                        } ?>
                        <span></span>
                    </h1>
                    <!-- Heading broadcast time fetch with defualt/converted TimeZone -->
                    <h3 class="eve_heading heading_broadcast">
                        <?php if (!empty($event_nasa_broadcast_c)) {
                            esc_html_e('Tune into the broadcast time at  ', 'nasa-tca');
                            echo "<span> </span>";
                        } ?>
                    </h3>

                    <div class="wrap_eve_details">
                        <div class="wrapper_box_feature_img">
                            <?php if (!empty($event_nasa_launch_c && $event_nasa_tz_c) || !empty($event_nasa_broadcast_c && $event_nasa_tz_c) || !empty($event_location)) { ?>
                                <div class="box_eve_detail">
                                    <!-- TimeZone Alternative Name  -->
                                    <h2 class="eve_tz_title"><?php
                                        if($event_nasa_tz_c){
                                            $Object = new DateTime();
                                            $Object->setTimezone(new DateTimeZone($event_nasa_tz_c));
                                            $Time = $Object->format("d-m-Y H:i");
                                        }
                                    ?></h2>

                                    <div class="eve_tz_sing_wrap">
                                        <div class="eve_tz_sing_wrap__inner">
                                            <!-- Launch Date -->
                                            <?php if (!empty($event_nasa_launch_c)) { ?>
                                                <div class="eve_tz_sing">
                                                    <span><?php esc_html_e('Launch date and time', 'nasa-tca') ?></span>
                                                    <p class="launch_D eve_d_<?php esc_attr__(get_the_ID()); ?>"> </p>
                                                </div>
                                            <?php }
                                            // Broadcast Date
                                            if (!empty($event_nasa_broadcast_c)) { ?>
                                                <div class="eve_tz_sing">
                                                    <span><?php esc_html_e('Broadcast date and time', 'nasa-tca') ?></span>
                                                    <p class="broadcast_D"> </p>
                                                </div>
                                            <?php } ?>
                                        </div>
                                        <?php
                                        // Location
                                        if (!empty($event_location)) {   ?>
                                            <div class="eve_tz_sing location_single_eve">
                                                <span> <?php esc_html_e('Event Location', 'nasa-tca'); ?></span>
                                                <p><?php esc_html_e($event_location, 'nasa-tca'); ?></p>
                                            </div>
                                        <?php } ?>
                                    </div>
                                </div>
                            <?php } ?>
                            <?php if ('' !== get_the_post_thumbnail(get_the_ID())) { ?>
                                <div class="eve_img_on_map">
                                    <?php echo get_the_post_thumbnail(get_the_ID(), array(150, 150)); ?>
                                </div>
                                <?php } else {
                                    $custom_logo_url = plugin_dir_url( __DIR__ ) .'img/nasa-logo.svg';
                                ?>
                                    <div class="feature_img">
                                        <img src="<?php echo esc_url($custom_logo_url); ?>" alt="<?php echo esc_attr(get_bloginfo('name')); ?>" />
                                    </div>
                            <?php } ?>
                        </div>
                        <div class="wrap_single_eve_note_desc">
                            <!-- Below box note -->
                            <div class="note_c">
                                <?php if (!empty($event_disclaim)) {
                                    esc_html_e($event_disclaim);
                                }
                                ?>
                            </div>
                            <!-- Display event content -->
                            <?php if (!empty(get_the_content())) { ?>
                                <div class="eve-entry-content">
                                    <?php $content = get_the_content();
                                    _e($content, 'nasa-tca'); ?>
                                </div>
                            <?php  } ?>
                        </div>

                        <div class="btns-eve-wrap">
                            <!-- Register for the event Button -->
                            <?php if (!empty($event_participate)) { ?>
                                <div class="regi_eve_b">
                                    <a href=" <?php echo  esc_url($event_participate); ?>" class="regiter_eve_btn" target="_blank"><?php esc_html_e('Register for the event', 'nasa-tca') ?></a>
                                </div>
                            <?php } ?>
                            <div class="reset_eve_b">
                                <!-- Reset button -->
                                <button data_reset_id="<?php if (!empty($eve_cookie_store_id)) { echo esc_attr($eve_cookie_store_id);} ?>" class="reset_eve_btn reset_btn_hide">
                                    <?php esc_html_e('Reset', 'nasa-tca') ?></button>
                            </div>
                            <div class="convo_eve_b">
                                <!-- Convert TimeZone btn with Dates ,title , Single eve ID etc attribute  -->
                                <a href="<?php echo esc_url(get_the_permalink()); ?>" eve-id="<?php if (!empty(get_the_ID())) { echo esc_attr(get_the_ID()); } ?>" eve-title="<?php if (!empty(get_the_title())) {echo esc_attr(get_the_title());} ?>" eve-date="<?php if (!empty($event_nasa_launch_c)) { echo converToTzFormat($event_nasa_launch_c, $event_nasa_tz_c, $event_nasa_tz_c, DateTime::ATOM); } ?>" eve-broad-date="<?php if (!empty($event_nasa_broadcast_c)) { echo converToTzFormat($event_nasa_broadcast_c, $event_nasa_tz_c, $event_nasa_tz_c, DateTime::ATOM); } ?>" eve-timezone="<?php if (!empty($event_nasa_tz_c)) { echo $event_nasa_tz_c; } ?>" popup-open-eve="popup-h-single_eve" class="covert_timezone_btn read_bio_single_eve open-button">
                                    <?php esc_html_e('Convert to my time', 'nasa-tca'); ?>
                                </a>
                            </div>
                        </div>

                    </div>
                    <?php
                    
                    if (has_post_thumbnail()) {
                        $dynamic_custom_event_logo_url = get_the_post_thumbnail_url();
                    }
                    else {
                        $dynamic_custom_event_logo_url = plugin_dir_url(__DIR__) . 'img/nasa-logo.svg';
                    
                    }
                    ?>
                    <div class="nasa_timezon">
                        <div class="nasa_timezon-header">
                            <div class="nasa_timezon-header-logo">
                                <img src="<?php echo esc_url($dynamic_custom_event_logo_url); ?>" alt="<?php echo esc_attr(get_bloginfo('name')); ?>" />
                                <h2> <?php _e(get_the_title()); ?></h2>
                            </div>
                            <div class="nasa_timezon-header-button">
                                <div class="all_event_convert_btn download_img nasa_downlod-bt" img_name="NASA'S <?php _e(get_the_title()); ?>.jpg"><?php esc_html_e('Download Image'); ?></div>
                                <a class="all_event_convert_btn read_bio_share open-button" popup-open="popup-h-share" href="javascript:void(0)"><?php esc_html_e('Share', 'nasa-tca') ?></a>
                            </div>

                        </div>
                        <div class="nasa_timezon-wrapper">
                            <div class="nasa_timezon-wrapper--row">
                                <div class="nasa_timezon-wrapper--column">
                                    <?php
                                      // Location
                                      if (!empty($event_location)) {   ?>
                                      <div class="timezon-header-title">
                                        <p><?php esc_html_e($event_location, 'nasa-tca'); ?></p>
                                    </div>
                                    <?php } ?>
                                    <ul>
                                    <?php if (!empty($event_nasa_launch_c)) { ?>
                                                
                                                 <li class="lunch-time-bottom">
                                                    <strong class="launch-time"><?php esc_html_e('LAUNCH DATE AND TIME', 'nasa-tca') ?></strong>
                                                    <p></p>
                                                </li>
                                            <?php } ?>
                                    <?php
                                    // Broadcast Date
                                    if (!empty($event_nasa_broadcast_c)) { ?>
                                            <li class="borad-time-bottom">
                                                    <strong class="broadcast-time"><?php esc_html_e('BROADCAST DATE AND TIME', 'nasa-tca') ?></strong>
                                                    <p> </p>
                                            </li>
                                    <?php } ?>
                                    </ul>
                                </div>

                                <div class="nasa_timezon-wrapper--column user-time-column hide-block">
                                    <div class="timezon-header-title">
                                        <p></p>
                                    </div>
                                    <ul>
                                        <li class="user-lunch-time-bottom hide-block">
                                            <strong class="launch-time">LAUNCH DATE AND TIME</strong>
                                            <p></p>
                                        </li>
                                        <li class="user-broad-time-bottom hide-block">
                                            <strong class="broadcast-time">BROADCAST DATE AND TIME</strong>
                                            <p></p>
                                        </li>
                                    </ul>
                                </div>

                            </div>


                        </div>

                    </div>
                    <div class="wrap_map_share_popup">

                        <div class="wrap_share_popup">

                            <!-- Share popupstart -->
                            <div class="popup" popup-name="popup-h-share" style="display: none;">
                                <div class="popup-content">
                                    <div class="popup-content__wrap">
                                        <div class="content_wrap">
                                            <div class="event-title">
                                                <?php esc_html_e('Share', 'nasa-tca') ?>
                                            </div>

                                            <div class="wrap_message">
                                                <div class="wrap_share_title"><?php esc_html_e('Message', 'nasa-tca') ?></div>
                                                <?php
                                                if (!empty(get_the_title()) && !empty($event_participate)) {
                                                    $meassage_def = 'I am excited to virtually join The ' . get_the_title()  . ' event. Join me by registering here: ' . $event_participate;
                                                } else {
                                                    if (!empty(get_the_title())) {
                                                        $meassage_def = 'I am excited to virtually join The ' . get_the_title()  . ' event.';
                                                    }
                                                    if (!empty($event_participate)) {
                                                        $meassage_def = 'I am excited to virtually join event. Join me by registering here: ' . $event_participate;
                                                    }
                                                }
                                                ?>

                                                <div class="wrap_message__inner">
                                                    <textarea name="message_share" rows="2" cols="10" class="message_share"><?php _e($meassage_def, 'nasa-tca'); ?></textarea>
                                                </div>

                                            </div>

                                            <div class="wrap_social">
                                                <div class="wrap_share_title"><?php esc_html_e('Share via social media', 'nasa-tca') ?></div>
                                                <div class="wrap_social__inner">
                                                    <div class="social_icon" data-src-s="<?php echo esc_url('https://twitter.com/share?text='); ?>">
                                                        <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="50px" height="50px">
                                                                <path fill="#03A9F4" d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429" />
                                                            </svg></span>
                                                        <span class="social_text"><?php esc_html_e('Twitter', 'nasa-tca') ?></span>
                                                    </div>
                                                    <div class="social_icon" data-src-s="<?php echo esc_url('https://www.facebook.com/sharer.php?text='); ?>">
                                                        <span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#395185" viewBox="0 0 24 24" width="48px" height="48px">
                                                                <path d="M21,3H3v18h9.621v-6.961h-2.343v-2.725h2.343V9.309c0-2.324,1.421-3.591,3.495-3.591c0.699-0.002,1.397,0.034,2.092,0.105 v2.43h-1.428c-1.13,0-1.35,0.534-1.35,1.322v1.735h2.7l-0.351,2.725h-2.365V21H21V3z" />
                                                            </svg>
                                                        </span>
                                                        <span class="social_text"><?php esc_html_e('Facebook', 'nasa-tca') ?></span>
                                                    </div>

                                                </div>
                                            </div>
                                            <div class="wrap_email">
                                                <div class="wrap_share_title"><?php esc_html_e('Share via email', 'nasa-tca') ?></div>
                                                <div class="wrap_email__inner">
                                                    <input type="hidden" name="event_title_hidden" class="event_title_hidden" value="<?php _e(get_the_title()); ?>">
                                                    <input type="email" name="shareviaemail" class="shareviaemail" placeholder="enter email address">
                                                    <div class="email_box" data-src-mail="mailto:"><?php esc_html_e('Send', 'nasa-tca') ?></div>
                                                </div>
                                            </div>
                                        </div>
                                        <a class="close-button" popup-close="popup-h-share" href="javascript:void(0)">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                                <path d="M28 2.82L25.18 0L14 11.18L2.82 0L0 2.82L11.18 14L0 25.18L2.82 28L14 16.82L25.18 28L28 25.18L16.82 14L28 2.82Z" fill="#000000" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <!-- Share popupend -->
                        </div>
                    </div>

                </div>

                <script>
                    // Display launch & broadcast datatime via timezone with converted timezone
                     var eve_id = "<?php echo get_the_ID(); ?>",
                        cookie_set_tz_sej = getCookie("nevent-" + eve_id),
                        cookie_set_all_tz_sej = getCookie("timezoneset_cookie");
                        var tz_sejj = "<?php echo $event_nasa_tz_c; ?>"
                        var lunch_d_sej = "<?php if (!empty($event_nasa_launch_c)) { ?>" + DateTimeTzConvert("<?php echo converToTzFormat($event_nasa_launch_c, $event_nasa_tz_c, $event_nasa_tz_c, DateTime::ATOM); ?>", tz_sejj, "dd LLLL y h:mm a ZZZZ") + "<?php } ?>",
                        lunch_T_sej = "<?php if (!empty($event_nasa_launch_c)) { ?>" + DateTimeTzConvert("<?php echo converToTzFormat($event_nasa_launch_c, $event_nasa_tz_c, $event_nasa_tz_c, DateTime::ATOM); ?>", tz_sejj, "h:mm a ZZZZ") + "<?php } ?>",
                        lunch_T_full_sej = "<?php if (!empty($event_nasa_launch_c)) { ?>" + DateTimeTzConvert("<?php echo converToTzFormat($event_nasa_launch_c, $event_nasa_tz_c, $event_nasa_tz_c, DateTime::ATOM); ?>", tz_sejj, "ZZZZZ") + "<?php } ?>",
                        broadcast_T_sej = "<?php if (!empty($event_nasa_broadcast_c)) { ?>" + DateTimeTzConvert("<?php echo converToTzFormat($event_nasa_broadcast_c, $event_nasa_tz_c, $event_nasa_tz_c, DateTime::ATOM); ?>", tz_sejj, "h:mm a ZZZZ") + "<?php } ?>";
                        broadcast_d_sej = "<?php if (!empty($event_nasa_broadcast_c)) { ?>" + DateTimeTzConvert("<?php echo converToTzFormat($event_nasa_broadcast_c, $event_nasa_tz_c, $event_nasa_tz_c, DateTime::ATOM); ?>", tz_sejj, "dd LLLL y h:mm a ZZZZ") + "<?php } ?>"
                        jQuery(document).ready((function(e) {
                            e(".lunch-time-bottom p").text("<?php if (!empty($event_nasa_launch_c)) { ?>" + DateTimeTzConvert("<?php echo converToTzFormat($event_nasa_launch_c, $event_nasa_tz_c, $event_nasa_tz_c, DateTime::ATOM); ?>", tz_sejj, "dd LLLL y h:mm a ZZZZ") + "<?php } ?>");
                            e(".borad-time-bottom p").text("<?php if (!empty($event_nasa_broadcast_c)) { ?>" + DateTimeTzConvert("<?php echo converToTzFormat($event_nasa_broadcast_c, $event_nasa_tz_c, $event_nasa_tz_c, DateTime::ATOM); ?>", tz_sejj, "dd LLLL y h:mm a ZZZZ") + "<?php } ?>");
                        }));
                    if ("" != cookie_set_all_tz_sej){
                        tz_sej = cookie_set_all_tz_sej,
                        cookie_set_all_tz_ab = getCookie("timezoneset_abb"),
                        cookie_set_all_tz_timezone = getCookie("timezoneset_timezone");
                        var lunch_d_sej = "<?php if (!empty($event_nasa_launch_c)) { ?>" + DateTimeTzConvert("<?php echo converToTzFormat($event_nasa_launch_c, $event_nasa_tz_c, $event_nasa_tz_c, DateTime::ATOM); ?>", tz_sej, "dd LLLL y h:mm a") + "<?php } ?>",
                        lunch_T_sej = "<?php if (!empty($event_nasa_launch_c)) { ?>" + DateTimeTzConvert("<?php echo converToTzFormat($event_nasa_launch_c, $event_nasa_tz_c, $event_nasa_tz_c, DateTime::ATOM); ?>", tz_sej, "h:mm a") + "<?php } ?>",
                        broadcast_T_sej = "<?php if (!empty($event_nasa_broadcast_c)) { ?>" + DateTimeTzConvert("<?php echo converToTzFormat($event_nasa_broadcast_c, $event_nasa_tz_c, $event_nasa_tz_c, DateTime::ATOM); ?>", tz_sej, "h:mm a") + "<?php } ?>";
                        broadcast_d_sej = "<?php if (!empty($event_nasa_broadcast_c)) { ?>" + DateTimeTzConvert("<?php echo converToTzFormat($event_nasa_broadcast_c, $event_nasa_tz_c, $event_nasa_tz_c, DateTime::ATOM); ?>", tz_sej, "dd LLLL y h:mm a") + "<?php } ?>"
                        jQuery(document).ready((function(e) {
                            e(".launch_D").empty(), e(".launch_D").text(lunch_d_sej+" "+cookie_set_all_tz_ab), e(".broadcast_D").empty(), e(".broadcast_D").text(broadcast_d_sej+" "+cookie_set_all_tz_ab), e(".eve_heading.heading_launch span").empty(), e(".eve_heading.heading_launch span").text(lunch_T_sej+' '+cookie_set_all_tz_ab), e(".eve_heading.heading_broadcast span").empty(), e(".eve_heading.heading_broadcast span").text(broadcast_T_sej+" "+cookie_set_all_tz_ab), e(".single_event_wrap .box_eve_detail .eve_tz_title").empty(), e(".single_event_wrap .box_eve_detail .eve_tz_title").text(cookie_set_all_tz_timezone);
                            e(".nasa_timezon-wrapper--column.user-time-column").removeClass('hide-block');
                            e(".nasa_timezon-wrapper--column.user-time-column .user-lunch-time-bottom").removeClass('hide-block');
                            e(".nasa_timezon-wrapper--column.user-time-column .user-lunch-time-bottom p").text(lunch_d_sej+" "+cookie_set_all_tz_ab);
                            <?php if (!empty($event_nasa_broadcast_c)) { ?>
                                e(".nasa_timezon-wrapper--column.user-time-column .user-broad-time-bottom").removeClass('hide-block');
                            e(".nasa_timezon-wrapper--column.user-time-column .user-broad-time-bottom p").text(broadcast_d_sej+" "+cookie_set_all_tz_ab);
                            e(".nasa_timezon-wrapper--column.user-time-column .timezon-header-title p").text(cookie_set_all_tz_timezone)
                            <?php }  ?>
                        }));
                    }
                    else if ("" != cookie_set_tz_sej){
                        tz_sej = cookie_set_tz_sej;
                        cookie_set_tz_ab = getCookie("nevent-" + eve_id +"abb"),
                        cookie_set_tz_timezone = getCookie("nevent-" + eve_id + "timezone");
                        var lunch_d_sej = "<?php if (!empty($event_nasa_launch_c)) { ?>" + DateTimeTzConvert("<?php echo converToTzFormat($event_nasa_launch_c, $event_nasa_tz_c, $event_nasa_tz_c, DateTime::ATOM); ?>", tz_sej, "dd LLLL y h:mm a") + "<?php } ?>",
                        lunch_T_sej = "<?php if (!empty($event_nasa_launch_c)) { ?>" + DateTimeTzConvert("<?php echo converToTzFormat($event_nasa_launch_c, $event_nasa_tz_c, $event_nasa_tz_c, DateTime::ATOM); ?>", tz_sej, "h:mm a") + "<?php } ?>",
                        broadcast_T_sej = "<?php if (!empty($event_nasa_broadcast_c)) { ?>" + DateTimeTzConvert("<?php echo converToTzFormat($event_nasa_broadcast_c, $event_nasa_tz_c, $event_nasa_tz_c, DateTime::ATOM); ?>", tz_sej, "h:mm a") + "<?php } ?>";
                        broadcast_d_sej = "<?php if (!empty($event_nasa_broadcast_c)) { ?>" + DateTimeTzConvert("<?php echo converToTzFormat($event_nasa_broadcast_c, $event_nasa_tz_c, $event_nasa_tz_c, DateTime::ATOM); ?>", tz_sej, "dd LLLL y h:mm a") + "<?php } ?>"
                        jQuery(document).ready((function(e) {
                            e(".launch_D").empty(), e(".launch_D").text(lunch_d_sej+" "+cookie_set_tz_ab), e(".broadcast_D").empty(), e(".broadcast_D").text(broadcast_d_sej+" "+cookie_set_tz_ab), e(".eve_heading.heading_launch span").empty(), e(".eve_heading.heading_launch span").text(lunch_T_sej+' '+cookie_set_tz_ab), e(".eve_heading.heading_broadcast span").empty(), e(".eve_heading.heading_broadcast span").text(broadcast_T_sej+" "+cookie_set_tz_ab), e(".single_event_wrap .box_eve_detail .eve_tz_title").empty(), e(".single_event_wrap .box_eve_detail .eve_tz_title").text(cookie_set_tz_timezone);
                            e(".nasa_timezon-wrapper--column.user-time-column").removeClass('hide-block');
                            e(".nasa_timezon-wrapper--column.user-time-column .user-lunch-time-bottom").removeClass('hide-block');
                            e(".nasa_timezon-wrapper--column.user-time-column .user-lunch-time-bottom p").text(lunch_d_sej+" "+cookie_set_tz_ab);
                            e(".nasa_timezon-wrapper--column.user-time-column .timezon-header-title p").text(cookie_set_tz_timezone)
                            <?php if (!empty($event_nasa_broadcast_c)) { ?>
                            e(".nasa_timezon-wrapper--column.user-time-column .user-broad-time-bottom").removeClass('hide-block');
                            e(".nasa_timezon-wrapper--column.user-time-column .user-broad-time-bottom p").text(broadcast_d_sej+" "+cookie_set_tz_ab);
                            <?php }  ?>
                        }));
                    }
                    else {
                    jQuery(document).ready((function(e) {
                        e(".launch_D").empty(), e(".launch_D").text(lunch_d_sej), e(".broadcast_D").empty(), e(".broadcast_D").text(broadcast_d_sej), e(".eve_heading.heading_launch span").empty(), e(".eve_heading.heading_launch span").text(lunch_T_sej), e(".eve_heading.heading_broadcast span").empty(), e(".eve_heading.heading_broadcast span").text(broadcast_T_sej), e(".single_event_wrap .box_eve_detail .eve_tz_title").empty(), e(".single_event_wrap .box_eve_detail .eve_tz_title").text(lunch_T_full_sej)
                    }));
                }
                </script>

            </article>
            <!-- Event listing link button -->
            <div class="view_all_events__wrap">
                <a href="<?php echo home_url() . '/events'; ?>" class="view_all_events">View All Events</a>
            </div>
        </div>
    </div>


<?php
endwhile; // End of the loop. 
?>
<!-- single event TimeZone Converter popupstart -->
<div class="popup popup-eve" popup-name-eve="popup-h-single_eve" style="display: none;">
    <div class="popup-content">
        <div class="popup-content__wrap">
            <div class="single_content_wrap">
                <div class="select_ur_timezone">
                    <span class="tz_heading_pu"> <?php esc_html_e('Select your timezone', 'nasa-tca'); ?></span>
                    <div class="sel_timezone_csingle_eve">
                        <div class="wrap_tz_aj">
                            <select type="text" class="sel_timezone_id" value="" placeholder="Search for your region or city">
                                <?php 
                                require_once plugin_dir_path( __FILE__ ) . '../partials/nasa-time-converter-app-public-display.php';
                                ?>
                            </select>
                        </div>

                        <input type="submit" value="<?php esc_attr_e('Confirm', 'nasa-tca'); ?>" class="confirm_btn single_eve_tz_p single_page_eve_tz">
                    </div>
                </div>
            </div>

            <a class="close-button" popup-close-eve="popup-h-single_eve" href="javascript:void(0)">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M28 2.82L25.18 0L14 11.18L2.82 0L0 2.82L11.18 14L0 25.18L2.82 28L14 16.82L25.18 28L28 25.18L16.82 14L28 2.82Z" fill="#000000" />
                </svg>
            </a>
        </div>


    </div>
</div>
<!-- popupend -->
<?php get_footer(); ?>
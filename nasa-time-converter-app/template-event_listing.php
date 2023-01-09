<?php
/*Template Name: Events listing
 */

get_header();

?>

<div class="event_listing_wrap">
    <div class="container">
        <!-- Stored All Event Cookie check -->
        <?php if (isset($_COOKIE['timezoneset_cookie'])) {
            $timezoneset_cookie_name = $_COOKIE['timezoneset_cookie'];
        }  ?>

        <div id="primary">
            <div class="all_event_convert_wrap">
                <div class="all_event_convert_wrap__inner">
                    <h1 class="page-title"><?php esc_html_e('Event Time converter', 'nasa-tca'); ?></h1>
                    <span><?php esc_html_e('Select an event to see your local timings for it.', 'nasa-tca'); ?></span>
                </div>
                <div class="all_event_convert_wrap__innerbtn">
                    <a class="all_event_convert_btn read_bio_all_tz open-button" popup-open="popup-h-all_tz" href="javascript:void(0)">
                        <?php esc_html_e('Convert All events', 'nasa-tca'); ?>
                    </a>

                    <button class="reset_eve_btn all_reset_tz reset_btn_hide"><?php esc_html_e('Reset All', 'nasa-tca') ?></button>

                    <!-- popupstart -->
                    <div class="popup" popup-name="popup-h-all_tz" style="display: none;">
                        <div class="popup-content">

                            <div class="popup-content__wrap">

                                <div class="content_wrap">
                                    <div class="event-title">
                                        <?php esc_html_e('Convert All events', 'nasa-tca'); ?>
                                    </div>

                                    <div class="select_ur_timezone">
                                        <span class="tz_heading_pu"> <?php esc_html_e('Select your timezone', 'nasa-tca'); ?></span>

                                        <div class="sel_timezone_call_tz">
                                            <div class="wrap_tz_aj">
                                            <select type="text" class="sel_alltimezone_id" value="" placeholder="Search for your region or city">
                                                <?php 
                                                require_once plugin_dir_path( __FILE__ ) . '../partials/nasa-time-converter-app-public-display.php';
                                                ?>
                                            </select>
                                            </div>
                                            <input type="submit" value="<?php esc_attr_e('Confirm', 'nasa-tca'); ?>" class="all_confirm_btn">
                                        </div>
                                    </div>
                                </div>

                                <a class="close-button" popup-close="popup-h-all_tz" href="javascript:void(0)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                        <path d="M28 2.82L25.18 0L14 11.18L2.82 0L0 2.82L11.18 14L0 25.18L2.82 28L14 16.82L25.18 28L28 25.18L16.82 14L28 2.82Z" fill="#000000" />
                                    </svg>
                                </a>
                            </div>

                        </div>
                    </div>
                    <!-- popupend -->
                </div>
            </div>

            <div id="content" role="main" class="wrap_all_event">
                <?php
                $per_page_events = get_option('posts_per_page');
                // Fetch Event Created
                $mypost =  array(
                    'posts_per_page' => $per_page_events,
                    'post_type' => 'event',
                    'paged' => get_query_var('paged') ? get_query_var('paged') : 1
                );
                $loop = new WP_Query($mypost);  ?>

                <?php while ($loop->have_posts()) : $loop->the_post();
                    // Cookie Stored check
                    if (isset($_COOKIE['nevent-' . get_the_ID()])) {
                        $eve_cookie_store_state = $_COOKIE['nevent-' . get_the_ID()];
                        $eve_cookie_store_id = get_the_ID();
                    }

                    $default_timezone = get_post_meta(get_the_ID(), 'event_d_timezone', true);
                    $event_nasa_launch = get_post_meta(get_the_ID(), 'event_nasa_launch', true);
                    $event_nasa_broadcast = get_post_meta(get_the_ID(), 'event_nasa_broadcast', true);

                    // check if launch date empty then broadcast date will show
                    if (!empty($event_nasa_launch && $default_timezone)) {
                        $eve_l_b_date = $event_nasa_launch;
                    } else {
                        if (!empty($event_nasa_broadcast && $default_timezone)) {
                            $eve_l_b_date = $event_nasa_broadcast;
                        }
                    }
                    // Short Month , Year , date Around Image
                    if (isset($eve_l_b_date)) {
                        if (!empty($timezoneset_cookie_name)) {
                            $date_s = new DateTime($eve_l_b_date, new DateTimeZone($default_timezone));
                            $timezoneName = str_split($timezoneset_cookie_name, 3);
                            if (isset($timezoneName[1])){
                                $date_s->setTimezone(new DateTimeZone($timezoneName[1]));
                            }
                        } else {
                            if (!empty($eve_cookie_store_id) && !empty($eve_cookie_store_state)) {
                                if (get_the_ID() == $eve_cookie_store_id) {
                                    $date_s = new DateTime($eve_l_b_date, new DateTimeZone($default_timezone));
                                    $timezoneNameSingle = str_split($eve_cookie_store_state, 3);
                                    if (isset($timezoneNameSingle[1])){
                                        $date_s->setTimezone(new DateTimeZone($timezoneNameSingle[1]));
                                    }
                                } else {

                                    $date_s = new DateTime($eve_l_b_date, new DateTimeZone($default_timezone));
                                    $date_s->setTimezone(new DateTimeZone($default_timezone));
                                }
                            } else {

                                $date_s = new DateTime($eve_l_b_date, new DateTimeZone($default_timezone));
                                $date_s->setTimezone(new DateTimeZone($default_timezone));
                            }
                        }

                        if (!empty($date_s)) {
                            $short_date = $date_s->format('F Y');
                            $shortest_month = $date_s->format('M');
                            $short_d = $date_s->format('d');
                        }
                    }

                ?>

                    <article id="event-<?php _e(get_the_ID()); ?>" <?php post_class('event_article'); ?>>

                        <?php if (!empty($short_date)) { ?> <div class="short_eve_date"><?php esc_html_e($short_date, 'nasa-tca'); ?></div><?php } ?>

                        <div class="listing-blog-wrapper">
                            <!-- Event Image  -->
                            <?php if (has_post_thumbnail(get_the_ID())) { ?>
                                <?php $image = wp_get_attachment_image_src(get_post_thumbnail_id(get_the_ID()), 'single-post-thumbnail'); ?>
                                <div class="event_post-thumbnail">
                                    <a href="<?php echo esc_url(get_the_permalink()); ?>">
                                        <img src="<?php echo $image[0]; ?>" alt="">
                                    </a>
                                    <?php if (!empty($short_d) && !empty($shortest_month)) { ?> <div class="short_eve_date_m"><span class="shortest_month_eve"><?php esc_html_e($shortest_month, 'nasa-tca'); ?></span><span class="short_date_eve short_d_eve_<?php _e(get_the_ID()); ?>"><?php esc_html_e($short_d, 'nasa-tca'); ?></span></div><?php } ?>
                                </div>
                            <?php } else { ?>
                                <div class="event_post-thumbnail default_img_nasa">
                                        <?php
                                            $custom_logo_url = plugin_dir_url( __DIR__ ) .'img/nasa-logo.svg';
                                        ?>
                                        <a href="<?php echo esc_url(get_the_permalink()); ?>" rel="home">
                                            <img src="<?php echo esc_url($custom_logo_url); ?>" alt="<?php echo esc_attr(get_bloginfo('name')); ?>" />
                                        </a>
                                    <?php if (!empty($short_d) && !empty($shortest_month)) { ?> <div class="short_eve_date_m"><span class="shortest_month_eve"><?php esc_html_e($shortest_month, 'nasa-tca'); ?></span><span class="short_date_eve short_d_eve_<?php _e(get_the_ID()); ?>"><?php esc_html_e($short_d, 'nasa-tca'); ?></span></div><?php } ?>
                                </div>
                            <?php } ?>

                            <div class="wrap_details_event">
                                <!-- Event Title -->
                                <?php if (!empty(get_the_title())) { ?>
                                    <div class="event_title">
                                        <a href="<?php echo esc_url(get_the_permalink()); ?>">
                                            <h4><?php _e(get_the_title(), 'nasa-tca'); ?></h4>
                                        </a>
                                    </div>
                                <?php }
                                // Display event content
                                if (!empty(get_the_excerpt())) {  ?>
                                    <div class="entry-content">
                                        <?php $content = get_the_excerpt();
                                        _e($content, 'nasa-tca'); ?>
                                    </div>
                                <?php  } ?>
                                <div class="wrap_time_loc">
                                    <!-- Check if Launch Date or broadcast date then Date show -->
                                    <?php if (isset($eve_l_b_date)) {  ?>
                                        <div class="wrap_time_loc__inner wrap_dt">
                                            <div class="dt_wrap"> <?php esc_html_e('Date And Time', 'nasa-tca'); ?></div>
                                            <p class="eve_d_<?php _e(get_the_ID()); ?>"> </p>
                                        </div>
                                    <?php }
                                    // Event Location
                                    $event_location = get_post_meta(get_the_ID(), 'event_location', true);
                                    if (!empty($event_location)) {
                                    ?>
                                        <div class="wrap_time_loc__inner wrap_loc">
                                            <div class="eve_loc_wrap"> <?php esc_html_e('Event Location', 'nasa-tca'); ?></div>
                                            <p><?php esc_html_e($event_location, 'nasa-tca'); ?></p>
                                        </div>
                                    <?php } ?>
                                </div>
                                <div class="covert_timezone">
                                    <!-- Convert TimeZone btn with Dates ,title , Single eve ID etc attribute   -->
                                    <a href="<?php echo esc_url(get_the_permalink()); ?>" eve-id=<?php if (!empty(get_the_ID())) {
                                                                                                        _e(get_the_ID());
                                                                                                    } ?> eve-title="<?php if (!empty(get_the_title())) {
                                                                                                                        _e(get_the_title(), 'nasa-tca');
                                                                                                                    }  ?>" eve-date="<?php if (!empty($default_timezone) && !empty($event_nasa_launch)) {
                                                                                                                                            echo converToTzFormat($event_nasa_launch, $default_timezone, $default_timezone, DateTime::ATOM);
                                                                                                                                        }  ?>" eve-broad-date="<?php if (!empty($event_nasa_broadcast)) {
                                                                                                                                                                        echo converToTzFormat($event_nasa_broadcast, $default_timezone, $default_timezone, DateTime::ATOM);
                                                                                                                                                                    } ?>" eve-timezone="<?php if (!empty($default_timezone)) {
                                                                                                                                                                    echo $default_timezone;
                                                                                                                                                                } ?>" popup-open-eve="popup-h-single_eve" class="covert_timezone_btn eve_single_popup_btn_<?php _e(get_the_ID()); ?> read_bio_single_eve open-button">
                                        <?php esc_html_e('Convert to my time', 'nasa-tca'); ?>
                                    </a>
                                </div>
                            </div>

                        </div>

                    </article>

                <?php endwhile; // End event loop 
                ?>
            </div>
            <!-- Events Pagination -->
            <div class="wrap_pagination_events">
                <?php echo paginate_links(array(
                    'format' => '?paged=%#%',
                    'current' => max(1, get_query_var('paged')),
                    'total' => $loop->max_num_pages,
                    'prev_text'    => __('« prev'),
                    'next_text'    => __('next »'),
                )); ?>
            </div>

            <?php wp_reset_postdata(); ?>
        </div>

        <!-- Single Event timezone convert popupstart -->
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
                                        require plugin_dir_path( __FILE__ ) . '../partials/nasa-time-converter-app-public-display.php';
                                        ?>
                                    </select>
                                </div>
                                <input type="submit" value="<?php esc_attr_e('Confirm', 'nasa-tca'); ?>" class="confirm_btn single_eve_tz_p" single_event_src="" event_id_c="" single_event_date="" single_eve_broad_date="">
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
    </div>
</div>
<?php get_footer(); ?>
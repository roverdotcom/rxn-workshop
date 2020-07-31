# Search API

## GET https://www.rover.com/api/v4/search/

This endpoint returns a set of search results based on parameters passed via query string.

### Query Parameters

| Key | Type | Example |
|---|---|---|
| centerlat* | Number | centerlat=45.4695 |
| centerlng* | Number | centerlng=-111.394 |
| service_type* | String | service_type=overnight-boarding |
| pet_type | String | pet_type=dog,cat |
| minprice | Number (between 0 and 150) | minprice=10 |
| maxprice | Number (between 0 and 150) | maxprice=130 |

### Example Result

`GET https://www.rover.com/api/v4/search/?service_type=overnight-boarding&centerlat=45.4695&centerlng=-111.394`

```json
{
    "callouts": [],
    "paginated_callouts": [],
    "page_count": 4,
    "viewport": {
        "minlat": 45.251,
        "minlng": -111.323,
        "maxlat": 45.752,
        "maxlng": -111.066
    },
    "results": [
        {
            "featured": true,
            "featured_label": {
                "text": "Calendar Recently Updated"
            },
            "featured_description": null,
            "review_dog_photo_url": "https://www.rover.com/cf-image-cdn/remote/images/pets/Adm7ZbjN/aszaugblsf/original?width=100&height=100&quality=70&fit=cover",
            "type": "homes",
            "is_concealed": null,
            "neighborhood": "",
            "reviews_count": 2,
            "repeat_client_count": 0,
            "currency_symbol": "$",
            "price_unit": "night",
            "provider_gallery_images": [
                {
                    "small": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/mmlshssxhd/original.jpg?width=200&height=200&quality=70&fit=cover",
                    "medium": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/mmlshssxhd/original.jpg?width=450&height=450&quality=70&fit=cover"
                },
                {
                    "small": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/xsruxhirkh/original.jpg?width=200&height=200&quality=70&fit=cover",
                    "medium": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/xsruxhirkh/original.jpg?width=450&height=450&quality=70&fit=cover"
                },
                {
                    "small": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/guklwvrewy/original.jpg?width=200&height=200&quality=70&fit=cover",
                    "medium": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/guklwvrewy/original.jpg?width=450&height=450&quality=70&fit=cover"
                },
                {
                    "small": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/hsncjjhjcw/original.jpg?width=200&height=200&quality=70&fit=cover",
                    "medium": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/hsncjjhjcw/original.jpg?width=450&height=450&quality=70&fit=cover"
                },
                {
                    "small": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/equcxmuxdv/original.jpeg?width=200&height=200&quality=70&fit=cover",
                    "medium": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/equcxmuxdv/original.jpeg?width=450&height=450&quality=70&fit=cover"
                },
                {
                    "small": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/hdtalfvtog/original.jpeg?width=200&height=200&quality=70&fit=cover",
                    "medium": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/hdtalfvtog/original.jpeg?width=450&height=450&quality=70&fit=cover"
                }
            ],
            "person_thumb": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/ehuxdfojgz/original?width=100&height=100&quality=70&fit=cover",
            "is_favorite": false,
            "longitude": "-111.096",
            "person_has_video": true,
            "rank": 1,
            "is_past_customer": false,
            "long_stays": true,
            "service_opk": "g7dDjMaQ",
            "breeds": null,
            "service_type": "overnight-boarding",
            "provider_api_url": "https://www.rover.com/api/v4/people/Qn1vKOZg/",
            "description": "I have always had pets in my life. I grew up with dogs, cats, horses, donkeys and goats. Currently I have two dogs that I love to bring on walks, t...",
            "city": "Bozeman",
            "popover_debug_data": null,
            "browsable_service_slugs": [
                "overnight-boarding",
                "drop-in",
                "doggy-day-care",
                "dog-walking"
            ],
            "contact_url": "/members/libby-k-dogs-cats-oh-my/contact/?service_type=overnight-boarding&start_date=&end_date=&refer=search",
            "price": "30.00",
            "default_image": {
                "small": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/ehuxdfojgz/original?width=200&height=200&quality=70&fit=cover",
                "medium": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/ehuxdfojgz/original?width=450&height=450&quality=70&fit=cover"
            },
            "ratings_average": "5",
            "person_first_name": "Libby",
            "unit_as_sentence": "per night",
            "person_summary": {
                "first_name": "Libby",
                "short_name": "Libby K.",
                "default_image": {
                    "caption": "",
                    "small": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/ehuxdfojgz/original?width=200&height=200&quality=70&fit=cover",
                    "medium": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/ehuxdfojgz/original?width=450&height=450&quality=70&fit=cover",
                    "wide": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/ehuxdfojgz/original?width=750&height=422&quality=70&fit=cover",
                    "wide_retina": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/ehuxdfojgz/original?width=1125&height=633&quality=70&fit=cover",
                    "large_uncropped": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/ehuxdfojgz/original?width=1024&height=1024&quality=70&fit=scale-down",
                    "large_uncropped_retina": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/ehuxdfojgz/original?width=1536&height=1536&quality=70&fit=scale-down",
                    "big_thumb": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/ehuxdfojgz/original?width=100&height=100&quality=70&fit=cover",
                    "is_fallback": false,
                    "original_height": 0,
                    "original_width": 0,
                    "orientation": "square",
                    "url": "https://www.rover.com/api/v4/images/gYMlEM5g/",
                    "urls": {
                        "ordering": "https://www.rover.com/api/v4/images/gYMlEM5g/ordering/"
                    },
                    "index": 2
                },
                "reviews_count": 2,
                "ratings_average": "5.0",
                "ratings_count": 2,
                "url": "https://www.rover.com/api/v4/people/Qn1vKOZg/",
                "web_url": "https://www.rover.com/members/libby-k-dogs-cats-oh-my/",
                "deep_link_url": "rover://members/Qn1vKOZg/",
                "urls": {
                    "summary": "https://www.rover.com/api/v4/people/Qn1vKOZg/summary/",
                    "private": "https://www.rover.com/api/v4/people/Qn1vKOZg/private/",
                    "images": "https://www.rover.com/api/v4/people/Qn1vKOZg/images/",
                    "services": "https://www.rover.com/api/v4/people/Qn1vKOZg/services/",
                    "videos": "https://www.rover.com/api/v4/people/Qn1vKOZg/videos/",
                    "reviews": "https://www.rover.com/api/v4/people/Qn1vKOZg/reviews/",
                    "promotion_and_referral_urls": "https://www.rover.com/api/v4/people/Qn1vKOZg/promotion-and-referral-urls/",
                    "wallet": "https://www.rover.com/api/v4/people/Qn1vKOZg/wallet/",
                    "wallet_default_payment": "https://www.rover.com/api/v4/people/Qn1vKOZg/wallet/default-payment/",
                    "home": "https://www.rover.com/api/v4/people/Qn1vKOZg/home/",
                    "zip_code": "https://www.rover.com/api/v4/people/Qn1vKOZg/zip_code/",
                    "wallet_promos": "https://www.rover.com/api/v4/people/Qn1vKOZg/wallet/promos/",
                    "wallet_promos_on_demand": "https://www.rover.com/api/v4/people/Qn1vKOZg/wallet/promos/?service_type=on-demand-dog-walking",
                    "stay_media": "https://www.rover.com/api/v4/people/Qn1vKOZg/stay-media/",
                    "profile_photo": "https://www.rover.com/api/v4/people/Qn1vKOZg/images/profile/",
                    "cover_photo": "https://www.rover.com/api/v4/people/Qn1vKOZg/images/cover/",
                    "calendar": "https://www.rover.com/api/v4/people/Qn1vKOZg/calendar/",
                    "public_calendar": "https://www.rover.com/api/v4/people/Qn1vKOZg/public-calendar/",
                    "weekend_availability": "https://www.rover.com/api/v4/people/Qn1vKOZg/weekend-availability/",
                    "confirmed_availability": "https://www.rover.com/api/v4/people/Qn1vKOZg/confirmed-availability/",
                    "hosting_service_preferences": "https://www.rover.com/api/v4/people/Qn1vKOZg/preferences/hosting/",
                    "traveling_service_preferences": "https://www.rover.com/api/v4/people/Qn1vKOZg/preferences/traveling/",
                    "lockbox": "https://www.rover.com/api/v4/people/Qn1vKOZg/lockbox/",
                    "enhanced_add_ons": "https://www.rover.com/api/v4/people/Qn1vKOZg/enhanced-add-ons/",
                    "assignment_settings": "https://www.rover.com/api/v4/people/Qn1vKOZg/assignment-settings/",
                    "as_requester_relationship": "https://www.rover.com/api/v4/relationships/as-requester/Qn1vKOZg/",
                    "web_edit_profile": "https://www.rover.com/account/profile/",
                    "web_performance_scores": null,
                    "web_sitter_self_promotion": "https://www.rover.com/account/profile/promote/",
                    "web_assignment_settings": "https://www.rover.com/provider/service-settings/rovernow/",
                    "migration_status": "https://www.rover.com/api/v4/people/Qn1vKOZg/private/migration-status/"
                },
                "description": "I have always had pets in my life. I grew up with dogs, cats, horses, donkeys and goats. Currently I have two dogs that I love to bring on walks, to the dog park, on hikes, and any outside adventure I have time for. \r\nRight now I have two dogs that I take care of with my boyfriend. They're both 30-35 pounds and love running around and being our adventure dogs.\n\nI work full time with kids right now, however between my boyfriend and I our dogs are never home alone for more than 4-5 hours. I also have family nearby that is available to let dogs out if I have a really long day ahead of me. Weekends are great for watching dogs for a day because they are my days off.\n\nI have a fenced in yard with two fun dogs that are both 30-35 lbs. I sometimes take them for runs or hikes. I often will take them to the dog park to run around. I live with my boyfriend who also loves dogs and will give them plenty of love and affection when he's not working. I swear that he loves dogs more than humans most of the time. When the weather is nice out we sometimes take our dogs climbing with us or running. When it snows, we occasionally take them skiing with us as well.",
                "responsiveness": {
                    "percent": 100,
                    "percent_desc": "Sitter responds to all requests within 24 hours",
                    "response_time": 339,
                    "time_short_desc": "A few minutes",
                    "time_long_desc": "Sitter responds in a few minutes",
                    "photo_rate": 100,
                    "photo_rate_desc": "Sitter sends photos through Rover on every stay"
                },
                "images": [
                    {
                        "caption": "",
                        "small": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/mmlshssxhd/original.jpg?width=200&height=200&quality=70&fit=cover",
                        "medium": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/mmlshssxhd/original.jpg?width=450&height=450&quality=70&fit=cover",
                        "wide": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/mmlshssxhd/original.jpg?width=750&height=422&quality=70&fit=cover",
                        "wide_retina": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/mmlshssxhd/original.jpg?width=1125&height=633&quality=70&fit=cover",
                        "large_uncropped": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/mmlshssxhd/original.jpg?width=1024&height=1024&quality=70&fit=scale-down",
                        "large_uncropped_retina": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/mmlshssxhd/original.jpg?width=1536&height=1536&quality=70&fit=scale-down",
                        "big_thumb": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/mmlshssxhd/original.jpg?width=100&height=100&quality=70&fit=cover",
                        "is_fallback": false,
                        "original_height": 0,
                        "original_width": 0,
                        "orientation": "square",
                        "url": "https://www.rover.com/api/v4/images/Azr1p64A/",
                        "urls": {
                            "ordering": "https://www.rover.com/api/v4/images/Azr1p64A/ordering/"
                        },
                        "index": 4
                    },
                    {
                        "caption": "",
                        "small": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/xsruxhirkh/original.jpg?width=200&height=200&quality=70&fit=cover",
                        "medium": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/xsruxhirkh/original.jpg?width=450&height=450&quality=70&fit=cover",
                        "wide": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/xsruxhirkh/original.jpg?width=750&height=422&quality=70&fit=cover",
                        "wide_retina": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/xsruxhirkh/original.jpg?width=1125&height=633&quality=70&fit=cover",
                        "large_uncropped": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/xsruxhirkh/original.jpg?width=1024&height=1024&quality=70&fit=scale-down",
                        "large_uncropped_retina": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/xsruxhirkh/original.jpg?width=1536&height=1536&quality=70&fit=scale-down",
                        "big_thumb": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/xsruxhirkh/original.jpg?width=100&height=100&quality=70&fit=cover",
                        "is_fallback": false,
                        "original_height": 0,
                        "original_width": 0,
                        "orientation": "square",
                        "url": "https://www.rover.com/api/v4/images/QO32Z8eQ/",
                        "urls": {
                            "ordering": "https://www.rover.com/api/v4/images/QO32Z8eQ/ordering/"
                        },
                        "index": 5
                    },
                    {
                        "caption": "",
                        "small": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/guklwvrewy/original.jpg?width=200&height=200&quality=70&fit=cover",
                        "medium": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/guklwvrewy/original.jpg?width=450&height=450&quality=70&fit=cover",
                        "wide": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/guklwvrewy/original.jpg?width=750&height=422&quality=70&fit=cover",
                        "wide_retina": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/guklwvrewy/original.jpg?width=1125&height=633&quality=70&fit=cover",
                        "large_uncropped": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/guklwvrewy/original.jpg?width=1024&height=1024&quality=70&fit=scale-down",
                        "large_uncropped_retina": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/guklwvrewy/original.jpg?width=1536&height=1536&quality=70&fit=scale-down",
                        "big_thumb": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/guklwvrewy/original.jpg?width=100&height=100&quality=70&fit=cover",
                        "is_fallback": false,
                        "original_height": 0,
                        "original_width": 0,
                        "orientation": "square",
                        "url": "https://www.rover.com/api/v4/images/gmMmOZ4g/",
                        "urls": {
                            "ordering": "https://www.rover.com/api/v4/images/gmMmOZ4g/ordering/"
                        },
                        "index": 6
                    },
                    {
                        "caption": "",
                        "small": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/hsncjjhjcw/original.jpg?width=200&height=200&quality=70&fit=cover",
                        "medium": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/hsncjjhjcw/original.jpg?width=450&height=450&quality=70&fit=cover",
                        "wide": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/hsncjjhjcw/original.jpg?width=750&height=422&quality=70&fit=cover",
                        "wide_retina": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/hsncjjhjcw/original.jpg?width=1125&height=633&quality=70&fit=cover",
                        "large_uncropped": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/hsncjjhjcw/original.jpg?width=1024&height=1024&quality=70&fit=scale-down",
                        "large_uncropped_retina": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/hsncjjhjcw/original.jpg?width=1536&height=1536&quality=70&fit=scale-down",
                        "big_thumb": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/hsncjjhjcw/original.jpg?width=100&height=100&quality=70&fit=cover",
                        "is_fallback": false,
                        "original_height": 0,
                        "original_width": 0,
                        "orientation": "square",
                        "url": "https://www.rover.com/api/v4/images/gD6Ry5JA/",
                        "urls": {
                            "ordering": "https://www.rover.com/api/v4/images/gD6Ry5JA/ordering/"
                        },
                        "index": 7
                    },
                    {
                        "caption": "",
                        "small": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/equcxmuxdv/original.jpeg?width=200&height=200&quality=70&fit=cover",
                        "medium": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/equcxmuxdv/original.jpeg?width=450&height=450&quality=70&fit=cover",
                        "wide": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/equcxmuxdv/original.jpeg?width=750&height=422&quality=70&fit=cover",
                        "wide_retina": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/equcxmuxdv/original.jpeg?width=1125&height=633&quality=70&fit=cover",
                        "large_uncropped": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/equcxmuxdv/original.jpeg?width=1024&height=1024&quality=70&fit=scale-down",
                        "large_uncropped_retina": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/equcxmuxdv/original.jpeg?width=1536&height=1536&quality=70&fit=scale-down",
                        "big_thumb": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/equcxmuxdv/original.jpeg?width=100&height=100&quality=70&fit=cover",
                        "is_fallback": false,
                        "original_height": 0,
                        "original_width": 0,
                        "orientation": "square",
                        "url": "https://www.rover.com/api/v4/images/QOPVYMnA/",
                        "urls": {
                            "ordering": "https://www.rover.com/api/v4/images/QOPVYMnA/ordering/"
                        },
                        "index": 8
                    },
                    {
                        "caption": "",
                        "small": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/hdtalfvtog/original.jpeg?width=200&height=200&quality=70&fit=cover",
                        "medium": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/hdtalfvtog/original.jpeg?width=450&height=450&quality=70&fit=cover",
                        "wide": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/hdtalfvtog/original.jpeg?width=750&height=422&quality=70&fit=cover",
                        "wide_retina": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/hdtalfvtog/original.jpeg?width=1125&height=633&quality=70&fit=cover",
                        "large_uncropped": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/hdtalfvtog/original.jpeg?width=1024&height=1024&quality=70&fit=scale-down",
                        "large_uncropped_retina": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/hdtalfvtog/original.jpeg?width=1536&height=1536&quality=70&fit=scale-down",
                        "big_thumb": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/hdtalfvtog/original.jpeg?width=100&height=100&quality=70&fit=cover",
                        "is_fallback": false,
                        "original_height": 0,
                        "original_width": 0,
                        "orientation": "square",
                        "url": "https://www.rover.com/api/v4/images/AZJWO7PA/",
                        "urls": {
                            "ordering": "https://www.rover.com/api/v4/images/AZJWO7PA/ordering/"
                        },
                        "index": 9
                    }
                ],
                "images_count": 6,
                "videos": [],
                "services": [
                    {
                        "title": "Dogs, Cats Oh my!",
                        "active": true,
                        "name": "Dog Boarding",
                        "description": "in the sitter's home",
                        "icon": "sitter-home",
                        "is_away": false,
                        "provider": "https://www.rover.com/api/v4/people/Qn1vKOZg/",
                        "url": "https://www.rover.com/api/v4/people/Qn1vKOZg/services/overnight-boarding/",
                        "urls": {
                            "calendar": "https://www.rover.com/api/v4/people/Qn1vKOZg/services/overnight-boarding/calendar/",
                            "calendar_settings": "https://www.rover.com/api/v4/people/Qn1vKOZg/services/overnight-boarding/calendar/settings/",
                            "holiday_rate_check": "https://www.rover.com/api/v4/people/Qn1vKOZg/services/overnight-boarding/holiday-rate-check/",
                            "contactability": "https://www.rover.com/api/v4/people/Qn1vKOZg/services/overnight-boarding/contactability/",
                            "related": "https://www.rover.com/api/v4/people/Qn1vKOZg/services/overnight-boarding/related/",
                            "settings": "https://www.rover.com/api/v4/people/Qn1vKOZg/services/overnight-boarding/settings/"
                        },
                        "service_add_ons": [
                            {
                                "active": true,
                                "price_per_unit": "30.00",
                                "price_per_unit_obj": {
                                    "amount": "30.00",
                                    "currency_iso": "USD"
                                },
                                "name": "Standard Rate",
                                "slug": "standard-rate",
                                "icon": null,
                                "suggested_pet_type": "any",
                                "should_show_offer_for_free_checkbox": false,
                                "frequency": "night",
                                "unit": "night",
                                "unit_description": "night",
                                "unit_label": "/ night",
                                "unit_as_sentence": "per night",
                                "help_text": "",
                                "is_alternative_rate": true,
                                "is_editable": true,
                                "is_future_service": false,
                                "min_price": "15.00",
                                "name_desc": "Dog Boarding in the Sitter's Home",
                                "num_units": null
                            },
                            {
                                "active": true,
                                "price_per_unit": "28.00",
                                "price_per_unit_obj": {
                                    "amount": "28.00",
                                    "currency_iso": "USD"
                                },
                                "name": "Holiday Rate",
                                "slug": "holiday-rate",
                                "icon": null,
                                "suggested_pet_type": "any",
                                "should_show_offer_for_free_checkbox": false,
                                "frequency": "night",
                                "unit": "night",
                                "unit_description": "night",
                                "unit_label": "/ night",
                                "unit_as_sentence": "per night",
                                "help_text": "Due to the high demand for pet-sitting services during the holiday season, stays that include any of the following dates will be priced at the sitter's Holiday Rate: Apr 10-12, 2020, May 22-25, 2020, Jul 3-5, 2020, Sep 4-7, 2020, Oct 10-12, 2020, Nov 25-29, 2020, and Dec 23, 2020 - Jan 3, 2021.",
                                "is_alternative_rate": true,
                                "is_editable": true,
                                "is_future_service": false,
                                "min_price": "15.00",
                                "name_desc": "Holiday Rate",
                                "num_units": null
                            },
                            {
                                "active": true,
                                "price_per_unit": "0.00",
                                "price_per_unit_obj": {
                                    "amount": "0",
                                    "currency_iso": "USD"
                                },
                                "name": "Cost Adjustments",
                                "slug": "cost-adjustments",
                                "icon": null,
                                "suggested_pet_type": "any",
                                "should_show_offer_for_free_checkbox": false,
                                "frequency": "one_time_event",
                                "unit": "",
                                "unit_description": "",
                                "unit_label": "",
                                "unit_as_sentence": "",
                                "help_text": "",
                                "is_alternative_rate": false,
                                "is_editable": true,
                                "is_future_service": false,
                                "min_price": "0.00",
                                "name_desc": "Cost Adjustments",
                                "num_units": null
                            }
                        ],
                        "meta": {
                            "location": "Bozeman, MT",
                            "city": "Bozeman",
                            "state": "MT",
                            "zip": "59718",
                            "country_code": "US",
                            "neighborhood": "",
                            "latitude": "45.683",
                            "longitude": "-111.096",
                            "radius_in_meters": null,
                            "children_at_location": false,
                            "cancellation_policy": "moderate",
                            "cancellation_policy_translated": "Moderate",
                            "cancellation_policy_desc": "<strong>Moderate</strong>\n        <ul>\n            <li>\n                A full refund is available if cancelled by <strong>12:00pm the day before</strong> the service begins. 12:00pm is determined by the sitter's time zone.\n            </li>\n            <li>\n                If cancelled <strong>later than 12:00pm the day before</strong> the service begins, a 50% refund is available for the first 7 cancelled calendar days from the cancellation request date. A 100% refund is available for any additional days.\n            </li>\n        </ul>"
                        },
                        "slug": "overnight-boarding",
                        "service_type": {
                            "name": "Dog Boarding",
                            "slug": "overnight-boarding",
                            "icon": "sitter-home",
                            "browsable": true,
                            "description": "in the sitter's home",
                            "action": null,
                            "visit_description": "Dog Boarding",
                            "availability_is_per_dog": true,
                            "supports_non_contiguous_dates": false,
                            "supports_day_of_week_search": false,
                            "supports_num_units_per_day": false,
                            "supports_start_end_date": true,
                            "supports_recurring_billing": false,
                            "supports_repeat_bookings": false,
                            "supports_service_delivery_verification": false,
                            "supports_sdv_based_payments": false,
                            "is_end_date_exclusive": true,
                            "num_units_per_day_label": null,
                            "alternative_rate_unit": "night",
                            "alternative_rate_unit_translated": "night",
                            "alternative_rate_unit_plural": "nights",
                            "accusative_object": "boarding",
                            "accusative_object_singular": "boarding",
                            "start_date_selector_description": "Drop-Off",
                            "end_date_selector_description": "Pick-Up",
                            "start_time_selector_description": "Between what times?",
                            "end_time_selector_description": "Between what times?",
                            "uses_flexible_time_ranges": false,
                            "location": "provider_home",
                            "suggested_pet_type": "any",
                            "show_new_label": false,
                            "is_daytime_traveling": false
                        },
                        "accepts_dogs": {
                            "small": true,
                            "medium": true,
                            "large": true,
                            "giant": false,
                            "puppies": false
                        },
                        "long_stays": true,
                        "spaces_available": 1,
                        "attributes": {
                            "building-type": {
                                "key": "building-type",
                                "icon": "house",
                                "text": "House",
                                "column": 1
                            },
                            "yard-type": {
                                "key": "yard-type",
                                "icon": "fenced",
                                "text": "Fenced Yard",
                                "column": 1
                            },
                            "non-smoking": {
                                "key": "non-smoking",
                                "icon": "non-smoking",
                                "text": "Non-Smoking Household",
                                "column": 1
                            },
                            "dogs": {
                                "key": "dogs",
                                "icon": "has-dogs",
                                "text": "Has 2 Dogs, No Other Pets",
                                "column": 2
                            },
                            "no-children": {
                                "key": "no-children",
                                "icon": "children-no",
                                "text": "No Children Present",
                                "column": 2
                            },
                            "accepts-only-one-client": {
                                "key": "accepts-only-one-client",
                                "icon": "id-card",
                                "text": "Takes Only 1 Client at a Time",
                                "column": 2
                            },
                            "dogs-allowed-on-bed": {
                                "key": "dogs-allowed-on-bed",
                                "icon": "bed-no",
                                "text": "Dogs Not Allowed On Bed",
                                "column": 3
                            },
                            "dogs-allowed-on-furniture": {
                                "key": "dogs-allowed-on-furniture",
                                "icon": "furniture-yes",
                                "text": "Dogs Allowed On Furniture",
                                "column": 3
                            },
                            "time-alone": {
                                "key": "time-alone",
                                "icon": "break-time",
                                "text": "Potty Breaks Every 4-8 Hours",
                                "column": null
                            }
                        },
                        "is_approved": true,
                        "is_accepting_new_customers": true,
                        "service_profile": {
                            "accepts_uncrated_dogs": true,
                            "accepts_unspayed_females": null,
                            "accepts_non_neutered_males": null,
                            "accepts_females_in_heat": null
                        }
                    },
                    {
                        "title": "Dogs, Cats Oh my!",
                        "active": true,
                        "name": "Drop-In Visits",
                        "description": "visits in your home",
                        "icon": "homevists",
                        "is_away": false,
                        "provider": "https://www.rover.com/api/v4/people/Qn1vKOZg/",
                        "url": "https://www.rover.com/api/v4/people/Qn1vKOZg/services/drop-in/",
                        "urls": {
                            "calendar": "https://www.rover.com/api/v4/people/Qn1vKOZg/services/drop-in/calendar/",
                            "calendar_settings": "https://www.rover.com/api/v4/people/Qn1vKOZg/services/drop-in/calendar/settings/",
                            "holiday_rate_check": "https://www.rover.com/api/v4/people/Qn1vKOZg/services/drop-in/holiday-rate-check/",
                            "contactability": "https://www.rover.com/api/v4/people/Qn1vKOZg/services/drop-in/contactability/",
                            "related": "https://www.rover.com/api/v4/people/Qn1vKOZg/services/drop-in/related/",
                            "settings": "https://www.rover.com/api/v4/people/Qn1vKOZg/services/drop-in/settings/"
                        },
                        "service_add_ons": [
                            {
                                "active": true,
                                "price_per_unit": "18.00",
                                "price_per_unit_obj": {
                                    "amount": "18.00",
                                    "currency_iso": "USD"
                                },
                                "name": "Standard Rate",
                                "slug": "standard-rate",
                                "icon": null,
                                "suggested_pet_type": "any",
                                "should_show_offer_for_free_checkbox": false,
                                "frequency": "visit",
                                "unit": "visit",
                                "unit_description": "visit",
                                "unit_label": "/ visit",
                                "unit_as_sentence": "per visit",
                                "help_text": "",
                                "is_alternative_rate": true,
                                "is_editable": true,
                                "is_future_service": false,
                                "min_price": "10.00",
                                "name_desc": "Drop-In Visits",
                                "num_units": null
                            },
                            {
                                "active": true,
                                "price_per_unit": "9.00",
                                "price_per_unit_obj": {
                                    "amount": "9.00",
                                    "currency_iso": "USD"
                                },
                                "name": "60 minute rate",
                                "slug": "long-drop-in",
                                "icon": null,
                                "suggested_pet_type": "any",
                                "should_show_offer_for_free_checkbox": false,
                                "frequency": "per_unit_event",
                                "unit": "visit",
                                "unit_description": "visit",
                                "unit_label": "/ visit",
                                "unit_as_sentence": "per visit",
                                "help_text": "",
                                "is_alternative_rate": false,
                                "is_editable": true,
                                "is_future_service": false,
                                "min_price": "0.00",
                                "name_desc": "60 minute rate",
                                "num_units": null
                            },
                            {
                                "active": true,
                                "price_per_unit": "15.00",
                                "price_per_unit_obj": {
                                    "amount": "15.00",
                                    "currency_iso": "USD"
                                },
                                "name": "Holiday Rate",
                                "slug": "holiday-rate",
                                "icon": null,
                                "suggested_pet_type": "any",
                                "should_show_offer_for_free_checkbox": false,
                                "frequency": "visit",
                                "unit": "visit",
                                "unit_description": "visit",
                                "unit_label": "/ visit",
                                "unit_as_sentence": "per visit",
                                "help_text": "Due to the high demand for pet-sitting services during the holiday season, stays that include any of the following dates will be priced at the sitter's Holiday Rate: Apr 10-12, 2020, May 22-25, 2020, Jul 3-5, 2020, Sep 4-7, 2020, Oct 10-12, 2020, Nov 25-29, 2020, and Dec 23, 2020 - Jan 3, 2021.",
                                "is_alternative_rate": true,
                                "is_editable": true,
                                "is_future_service": false,
                                "min_price": "10.00",
                                "name_desc": "Holiday Rate",
                                "num_units": null
                            },
                            {
                                "active": true,
                                "price_per_unit": "12.00",
                                "price_per_unit_obj": {
                                    "amount": "12.00",
                                    "currency_iso": "USD"
                                },
                                "name": "Puppy Rate",
                                "slug": "puppy",
                                "icon": null,
                                "suggested_pet_type": "dog",
                                "should_show_offer_for_free_checkbox": false,
                                "frequency": "visit",
                                "unit": "visit",
                                "unit_description": "visit",
                                "unit_label": "/ visit",
                                "unit_as_sentence": "per visit",
                                "help_text": "",
                                "is_alternative_rate": true,
                                "is_editable": true,
                                "is_future_service": false,
                                "min_price": "10.00",
                                "name_desc": "Puppy Rate",
                                "num_units": null
                            },
                            {
                                "active": true,
                                "price_per_unit": "12.00",
                                "price_per_unit_obj": {
                                    "amount": "12.00",
                                    "currency_iso": "USD"
                                },
                                "name": "Cat Care",
                                "slug": "cat-care",
                                "icon": "has-cats",
                                "suggested_pet_type": "dog",
                                "should_show_offer_for_free_checkbox": false,
                                "frequency": "visit",
                                "unit": "visit",
                                "unit_description": "visit",
                                "unit_label": "/ visit",
                                "unit_as_sentence": "per visit",
                                "help_text": "",
                                "is_alternative_rate": true,
                                "is_editable": true,
                                "is_future_service": false,
                                "min_price": "0.00",
                                "name_desc": "Cat Care",
                                "num_units": null
                            },
                            {
                                "active": true,
                                "price_per_unit": "6.00",
                                "price_per_unit_obj": {
                                    "amount": "6.00",
                                    "currency_iso": "USD"
                                },
                                "name": "Additional Cat",
                                "slug": "additional-cat",
                                "icon": null,
                                "suggested_pet_type": "cat",
                                "should_show_offer_for_free_checkbox": false,
                                "frequency": "visit",
                                "unit": "visit",
                                "unit_description": "visit",
                                "unit_label": "/ visit",
                                "unit_as_sentence": "per visit",
                                "help_text": "",
                                "is_alternative_rate": true,
                                "is_editable": true,
                                "is_future_service": false,
                                "min_price": "0.00",
                                "name_desc": "Additional Cat",
                                "num_units": null
                            },
                            {
                                "active": true,
                                "price_per_unit": "0.00",
                                "price_per_unit_obj": {
                                    "amount": "0",
                                    "currency_iso": "USD"
                                },
                                "name": "Cost Adjustments",
                                "slug": "cost-adjustments",
                                "icon": null,
                                "suggested_pet_type": "any",
                                "should_show_offer_for_free_checkbox": false,
                                "frequency": "one_time_event",
                                "unit": "",
                                "unit_description": "",
                                "unit_label": "",
                                "unit_as_sentence": "",
                                "help_text": "",
                                "is_alternative_rate": false,
                                "is_editable": true,
                                "is_future_service": false,
                                "min_price": "0.00",
                                "name_desc": "Cost Adjustments",
                                "num_units": null
                            }
                        ],
                        "meta": {
                            "location": "Bozeman, MT",
                            "city": "Bozeman",
                            "state": "MT",
                            "zip": "59718",
                            "country_code": "US",
                            "neighborhood": "",
                            "latitude": "45.683",
                            "longitude": "-111.096",
                            "radius_in_meters": 24000,
                            "children_at_location": null,
                            "cancellation_policy": "moderate",
                            "cancellation_policy_translated": "Moderate",
                            "cancellation_policy_desc": "<strong>Moderate</strong>\n        <ul>\n            <li>\n                A full refund is available if cancelled by <strong>12:00pm the day before</strong> the service begins. 12:00pm is determined by the sitter's time zone.\n            </li>\n            <li>\n                If cancelled <strong>later than 12:00pm the day before</strong> the service begins, a 50% refund is available for the first 7 cancelled calendar days from the cancellation request date. A 100% refund is available for any additional days.\n            </li>\n        </ul>"
                        },
                        "slug": "drop-in",
                        "service_type": {
                            "name": "Drop-In Visits",
                            "slug": "drop-in",
                            "icon": "homevists",
                            "browsable": true,
                            "description": "visits in your home",
                            "action": null,
                            "visit_description": "Drop-in",
                            "availability_is_per_dog": false,
                            "supports_non_contiguous_dates": true,
                            "supports_day_of_week_search": false,
                            "supports_num_units_per_day": true,
                            "supports_start_end_date": false,
                            "supports_recurring_billing": false,
                            "supports_repeat_bookings": true,
                            "supports_service_delivery_verification": true,
                            "supports_sdv_based_payments": false,
                            "is_end_date_exclusive": false,
                            "num_units_per_day_label": "Visits Per Day",
                            "alternative_rate_unit": "visit",
                            "alternative_rate_unit_translated": "visit",
                            "alternative_rate_unit_plural": "visits",
                            "accusative_object": "visits",
                            "accusative_object_singular": "visit",
                            "start_date_selector_description": "When are you leaving?",
                            "end_date_selector_description": "When are you returning?",
                            "start_time_selector_description": null,
                            "end_time_selector_description": null,
                            "uses_flexible_time_ranges": false,
                            "location": "requester_home",
                            "suggested_pet_type": "any",
                            "show_new_label": false,
                            "is_daytime_traveling": true
                        },
                        "accepts_dogs": {
                            "small": true,
                            "medium": true,
                            "large": true,
                            "giant": true,
                            "puppies": true
                        },
                        "long_stays": true,
                        "spaces_available": 3,
                        "attributes": {},
                        "is_approved": true,
                        "is_accepting_new_customers": true,
                        "service_profile": {}
                    },
                    {
                        "title": "Dogs, Cats Oh my!",
                        "active": true,
                        "name": "Doggy Day Care",
                        "description": "in the sitter's home",
                        "icon": "daycare",
                        "is_away": false,
                        "provider": "https://www.rover.com/api/v4/people/Qn1vKOZg/",
                        "url": "https://www.rover.com/api/v4/people/Qn1vKOZg/services/doggy-day-care/",
                        "urls": {
                            "calendar": "https://www.rover.com/api/v4/people/Qn1vKOZg/services/doggy-day-care/calendar/",
                            "calendar_settings": "https://www.rover.com/api/v4/people/Qn1vKOZg/services/doggy-day-care/calendar/settings/",
                            "holiday_rate_check": "https://www.rover.com/api/v4/people/Qn1vKOZg/services/doggy-day-care/holiday-rate-check/",
                            "contactability": "https://www.rover.com/api/v4/people/Qn1vKOZg/services/doggy-day-care/contactability/",
                            "related": "https://www.rover.com/api/v4/people/Qn1vKOZg/services/doggy-day-care/related/",
                            "settings": "https://www.rover.com/api/v4/people/Qn1vKOZg/services/doggy-day-care/settings/"
                        },
                        "service_add_ons": [
                            {
                                "active": true,
                                "price_per_unit": "25.00",
                                "price_per_unit_obj": {
                                    "amount": "25.00",
                                    "currency_iso": "USD"
                                },
                                "name": "Standard Rate",
                                "slug": "standard-rate",
                                "icon": null,
                                "suggested_pet_type": "any",
                                "should_show_offer_for_free_checkbox": false,
                                "frequency": "day",
                                "unit": "day",
                                "unit_description": "day",
                                "unit_label": "/ day",
                                "unit_as_sentence": "per day",
                                "help_text": "",
                                "is_alternative_rate": true,
                                "is_editable": true,
                                "is_future_service": false,
                                "min_price": "15.00",
                                "name_desc": "Doggy Day Care",
                                "num_units": null
                            },
                            {
                                "active": true,
                                "price_per_unit": "28.00",
                                "price_per_unit_obj": {
                                    "amount": "28.00",
                                    "currency_iso": "USD"
                                },
                                "name": "Holiday Rate",
                                "slug": "holiday-rate",
                                "icon": null,
                                "suggested_pet_type": "any",
                                "should_show_offer_for_free_checkbox": false,
                                "frequency": "day",
                                "unit": "day",
                                "unit_description": "day",
                                "unit_label": "/ day",
                                "unit_as_sentence": "per day",
                                "help_text": "Due to the high demand for pet-sitting services during the holiday season, stays that include any of the following dates will be priced at the sitter's Holiday Rate: Apr 10-12, 2020, May 22-25, 2020, Jul 3-5, 2020, Sep 4-7, 2020, Oct 10-12, 2020, Nov 25-29, 2020, and Dec 23, 2020 - Jan 3, 2021.",
                                "is_alternative_rate": true,
                                "is_editable": true,
                                "is_future_service": false,
                                "min_price": "15.00",
                                "name_desc": "Holiday Rate",
                                "num_units": null
                            },
                            {
                                "active": true,
                                "price_per_unit": "0.00",
                                "price_per_unit_obj": {
                                    "amount": "0",
                                    "currency_iso": "USD"
                                },
                                "name": "Cost Adjustments",
                                "slug": "cost-adjustments",
                                "icon": null,
                                "suggested_pet_type": "any",
                                "should_show_offer_for_free_checkbox": false,
                                "frequency": "one_time_event",
                                "unit": "",
                                "unit_description": "",
                                "unit_label": "",
                                "unit_as_sentence": "",
                                "help_text": "",
                                "is_alternative_rate": false,
                                "is_editable": true,
                                "is_future_service": false,
                                "min_price": "0.00",
                                "name_desc": "Cost Adjustments",
                                "num_units": null
                            }
                        ],
                        "meta": {
                            "location": "Bozeman, MT",
                            "city": "Bozeman",
                            "state": "MT",
                            "zip": "59718",
                            "country_code": "US",
                            "neighborhood": "",
                            "latitude": "45.683",
                            "longitude": "-111.096",
                            "radius_in_meters": null,
                            "children_at_location": false,
                            "cancellation_policy": "flexible",
                            "cancellation_policy_translated": "Flexible",
                            "cancellation_policy_desc": "<strong>Flexible</strong>\n        <ul>\n            \n            <li>\n                Full refund if booking is cancelled <strong>before</strong> the service is delivered.\n            </li>\n            \n        </ul>"
                        },
                        "slug": "doggy-day-care",
                        "service_type": {
                            "name": "Doggy Day Care",
                            "slug": "doggy-day-care",
                            "icon": "daycare",
                            "browsable": true,
                            "description": "in the sitter's home",
                            "action": null,
                            "visit_description": "Day Care",
                            "availability_is_per_dog": true,
                            "supports_non_contiguous_dates": true,
                            "supports_day_of_week_search": true,
                            "supports_num_units_per_day": false,
                            "supports_start_end_date": false,
                            "supports_recurring_billing": false,
                            "supports_repeat_bookings": true,
                            "supports_service_delivery_verification": true,
                            "supports_sdv_based_payments": false,
                            "is_end_date_exclusive": false,
                            "num_units_per_day_label": null,
                            "alternative_rate_unit": "day",
                            "alternative_rate_unit_translated": "day",
                            "alternative_rate_unit_plural": "days",
                            "accusative_object": "day care",
                            "accusative_object_singular": "day care",
                            "start_date_selector_description": null,
                            "end_date_selector_description": null,
                            "start_time_selector_description": "Drop off between",
                            "end_time_selector_description": "Pick-up between",
                            "uses_flexible_time_ranges": true,
                            "location": "provider_home",
                            "suggested_pet_type": "dog",
                            "show_new_label": false,
                            "is_daytime_traveling": false
                        },
                        "accepts_dogs": {
                            "small": true,
                            "medium": true,
                            "large": true,
                            "giant": false,
                            "puppies": false
                        },
                        "long_stays": true,
                        "spaces_available": 1,
                        "attributes": {
                            "building-type": {
                                "key": "building-type",
                                "icon": "house",
                                "text": "House",
                                "column": 1
                            },
                            "yard-type": {
                                "key": "yard-type",
                                "icon": "fenced",
                                "text": "Fenced Yard",
                                "column": 1
                            },
                            "non-smoking": {
                                "key": "non-smoking",
                                "icon": "non-smoking",
                                "text": "Non-Smoking Household",
                                "column": 1
                            },
                            "dogs": {
                                "key": "dogs",
                                "icon": "has-dogs",
                                "text": "Has 2 Dogs, No Other Pets",
                                "column": 2
                            },
                            "no-children": {
                                "key": "no-children",
                                "icon": "children-no",
                                "text": "No Children Present",
                                "column": 2
                            },
                            "accepts-only-one-client": {
                                "key": "accepts-only-one-client",
                                "icon": "id-card",
                                "text": "Takes Only 1 Client at a Time",
                                "column": 2
                            },
                            "dogs-allowed-on-bed": {
                                "key": "dogs-allowed-on-bed",
                                "icon": "bed-no",
                                "text": "Dogs Not Allowed On Bed",
                                "column": 3
                            },
                            "dogs-allowed-on-furniture": {
                                "key": "dogs-allowed-on-furniture",
                                "icon": "furniture-yes",
                                "text": "Dogs Allowed On Furniture",
                                "column": 3
                            },
                            "time-alone": {
                                "key": "time-alone",
                                "icon": "break-time",
                                "text": "Potty Breaks Every 4-8 Hours",
                                "column": null
                            }
                        },
                        "is_approved": true,
                        "is_accepting_new_customers": true,
                        "service_profile": {
                            "accepts_uncrated_dogs": true,
                            "accepts_unspayed_females": null,
                            "accepts_non_neutered_males": null,
                            "accepts_females_in_heat": null
                        }
                    },
                    {
                        "title": "Dogs, Cats Oh my!",
                        "active": true,
                        "name": "Dog Walking",
                        "description": "in your neighborhood",
                        "icon": "walking",
                        "is_away": false,
                        "provider": "https://www.rover.com/api/v4/people/Qn1vKOZg/",
                        "url": "https://www.rover.com/api/v4/people/Qn1vKOZg/services/dog-walking/",
                        "urls": {
                            "calendar": "https://www.rover.com/api/v4/people/Qn1vKOZg/services/dog-walking/calendar/",
                            "calendar_settings": "https://www.rover.com/api/v4/people/Qn1vKOZg/services/dog-walking/calendar/settings/",
                            "holiday_rate_check": "https://www.rover.com/api/v4/people/Qn1vKOZg/services/dog-walking/holiday-rate-check/",
                            "contactability": "https://www.rover.com/api/v4/people/Qn1vKOZg/services/dog-walking/contactability/",
                            "related": "https://www.rover.com/api/v4/people/Qn1vKOZg/services/dog-walking/related/",
                            "settings": "https://www.rover.com/api/v4/people/Qn1vKOZg/services/dog-walking/settings/"
                        },
                        "service_add_ons": [
                            {
                                "active": true,
                                "price_per_unit": "15.00",
                                "price_per_unit_obj": {
                                    "amount": "15.00",
                                    "currency_iso": "USD"
                                },
                                "name": "Standard Rate",
                                "slug": "standard-rate",
                                "icon": null,
                                "suggested_pet_type": "any",
                                "should_show_offer_for_free_checkbox": false,
                                "frequency": "walk",
                                "unit": "walk",
                                "unit_description": "walk",
                                "unit_label": "/ walk",
                                "unit_as_sentence": "per walk",
                                "help_text": "",
                                "is_alternative_rate": true,
                                "is_editable": true,
                                "is_future_service": false,
                                "min_price": "10.00",
                                "name_desc": "Dog Walking",
                                "num_units": null
                            },
                            {
                                "active": true,
                                "price_per_unit": "8.00",
                                "price_per_unit_obj": {
                                    "amount": "8.00",
                                    "currency_iso": "USD"
                                },
                                "name": "60 minute rate",
                                "slug": "long-walk",
                                "icon": null,
                                "suggested_pet_type": "dog",
                                "should_show_offer_for_free_checkbox": false,
                                "frequency": "per_unit_event",
                                "unit": "walk",
                                "unit_description": "walk",
                                "unit_label": "/ walk",
                                "unit_as_sentence": "per walk",
                                "help_text": "",
                                "is_alternative_rate": false,
                                "is_editable": true,
                                "is_future_service": false,
                                "min_price": "0.00",
                                "name_desc": "60 minute rate",
                                "num_units": null
                            },
                            {
                                "active": true,
                                "price_per_unit": "18.00",
                                "price_per_unit_obj": {
                                    "amount": "18.00",
                                    "currency_iso": "USD"
                                },
                                "name": "Holiday Rate",
                                "slug": "holiday-rate",
                                "icon": null,
                                "suggested_pet_type": "any",
                                "should_show_offer_for_free_checkbox": false,
                                "frequency": "walk",
                                "unit": "walk",
                                "unit_description": "walk",
                                "unit_label": "/ walk",
                                "unit_as_sentence": "per walk",
                                "help_text": "Due to the high demand for pet-sitting services during the holiday season, stays that include any of the following dates will be priced at the sitter's Holiday Rate: Apr 10-12, 2020, May 22-25, 2020, Jul 3-5, 2020, Sep 4-7, 2020, Oct 10-12, 2020, Nov 25-29, 2020, and Dec 23, 2020 - Jan 3, 2021.",
                                "is_alternative_rate": true,
                                "is_editable": true,
                                "is_future_service": false,
                                "min_price": "0.00",
                                "name_desc": "Holiday Rate",
                                "num_units": null
                            },
                            {
                                "active": true,
                                "price_per_unit": "18.00",
                                "price_per_unit_obj": {
                                    "amount": "18.00",
                                    "currency_iso": "USD"
                                },
                                "name": "Puppy Rate",
                                "slug": "puppy",
                                "icon": null,
                                "suggested_pet_type": "dog",
                                "should_show_offer_for_free_checkbox": false,
                                "frequency": "walk",
                                "unit": "walk",
                                "unit_description": "walk",
                                "unit_label": "/ walk",
                                "unit_as_sentence": "per walk",
                                "help_text": "",
                                "is_alternative_rate": true,
                                "is_editable": true,
                                "is_future_service": false,
                                "min_price": "10.00",
                                "name_desc": "Puppy Rate",
                                "num_units": null
                            },
                            {
                                "active": true,
                                "price_per_unit": "0.00",
                                "price_per_unit_obj": {
                                    "amount": "0",
                                    "currency_iso": "USD"
                                },
                                "name": "Cost Adjustments",
                                "slug": "cost-adjustments",
                                "icon": null,
                                "suggested_pet_type": "any",
                                "should_show_offer_for_free_checkbox": false,
                                "frequency": "one_time_event",
                                "unit": "",
                                "unit_description": "",
                                "unit_label": "",
                                "unit_as_sentence": "",
                                "help_text": "",
                                "is_alternative_rate": false,
                                "is_editable": true,
                                "is_future_service": false,
                                "min_price": "0.00",
                                "name_desc": "Cost Adjustments",
                                "num_units": null
                            }
                        ],
                        "meta": {
                            "location": "Bozeman, MT",
                            "city": "Bozeman",
                            "state": "MT",
                            "zip": "59718",
                            "country_code": "US",
                            "neighborhood": "",
                            "latitude": "45.683",
                            "longitude": "-111.096",
                            "radius_in_meters": 24000,
                            "children_at_location": null,
                            "cancellation_policy": "flexible",
                            "cancellation_policy_translated": "Flexible",
                            "cancellation_policy_desc": "<strong>Flexible</strong>\n        <ul>\n            \n            <li>\n                Full refund if booking is cancelled <strong>before</strong> the service is delivered.\n            </li>\n            \n        </ul>"
                        },
                        "slug": "dog-walking",
                        "service_type": {
                            "name": "Dog Walking",
                            "slug": "dog-walking",
                            "icon": "walking",
                            "browsable": true,
                            "description": "in your neighborhood",
                            "action": null,
                            "visit_description": "Dog Walk",
                            "availability_is_per_dog": false,
                            "supports_non_contiguous_dates": true,
                            "supports_day_of_week_search": true,
                            "supports_num_units_per_day": true,
                            "supports_start_end_date": false,
                            "supports_recurring_billing": false,
                            "supports_repeat_bookings": true,
                            "supports_service_delivery_verification": true,
                            "supports_sdv_based_payments": false,
                            "is_end_date_exclusive": false,
                            "num_units_per_day_label": "Walks Per Day",
                            "alternative_rate_unit": "walk",
                            "alternative_rate_unit_translated": "walk",
                            "alternative_rate_unit_plural": "walks",
                            "accusative_object": "walks",
                            "accusative_object_singular": "walk",
                            "start_date_selector_description": null,
                            "end_date_selector_description": null,
                            "start_time_selector_description": null,
                            "end_time_selector_description": null,
                            "uses_flexible_time_ranges": false,
                            "location": "requester_home",
                            "suggested_pet_type": "dog",
                            "show_new_label": false,
                            "is_daytime_traveling": true
                        },
                        "accepts_dogs": {
                            "small": true,
                            "medium": true,
                            "large": true,
                            "giant": true,
                            "puppies": true
                        },
                        "long_stays": true,
                        "spaces_available": 2,
                        "attributes": {},
                        "is_approved": true,
                        "is_accepting_new_customers": true,
                        "service_profile": {}
                    }
                ],
                "attributes": {
                    "years-of-experience": {
                        "key": "years-of-experience",
                        "icon": "experience",
                        "text": "24 Years Of Experience",
                        "column": 1
                    },
                    "oral-medication": {
                        "key": "oral-medication",
                        "icon": "oral-meds-yes",
                        "text": "Oral Medication Administration",
                        "column": 1
                    }
                },
                "badges": [
                    {
                        "icon": "//dt0499hd9onpe.cloudfront.net/badges/verified-background-check/icons/icon_eff390b1.png",
                        "title": "Verified Background Check",
                        "description": "This sitter has successfully passed a basic <a href=\"/background-checks/\">background check</a> by a third party provider."
                    },
                    {
                        "icon": "//dt0499hd9onpe.cloudfront.net/badges/rover-training-graduate/icons/icon_1357faa9.png",
                        "title": "Rover 101",
                        "description": "This sitter has completed <a href=\"https://www.rover.com/sitter-training\">Rover 101</a> for pet care best practices."
                    }
                ],
                "provider_profile": {
                    "years_of_experience": 24,
                    "repeat_client_count": 0,
                    "can_provide_oral_medication": true,
                    "can_provide_injected_medication": null,
                    "senior_dog_care_experience": null,
                    "special_needs_dog_care_experience": false,
                    "can_provide_daily_exercise": null,
                    "display_premier_branding": false,
                    "display_premier_profile_verification": false,
                    "dogs_experience": "My passion is climbing so if I'm watching your dog on a weekend and go out climbing they will probably join me. However, I like to take dogs to the dog park or just walk around my neighborhood. We live near a nice park with a pond when it's warm.",
                    "on_demand_walking_experience": "I have always had pets in my life. I grew up with dogs, cats, horses, donkeys and goats. Currently I have two dogs that I love to bring on walks, to the dog park, on hikes, and any outside adventure I have time for. \r\nRight now I have two dogs that I take care of with my boyfriend. They're both 30-35 pounds and love running around and being our adventure dogs.\n\nI work full time with kids right now, however between my boyfriend and I our dogs are never home alone for more than 4-5 hours. I also have family nearby that is available to let dogs out if I have a really long day ahead of me. Weekends are great for watching dogs for a day because they are my days off.\n\nI have a fenced in yard with two fun dogs that are both 30-35 lbs. I sometimes take them for runs or hikes. I often will take them to the dog park to run around. I live with my boyfriend who also loves dogs and will give them plenty of love and affection when he's not working. I swear that he loves dogs more than humans most of the time. When the weather is nice out we sometimes take our dogs climbing with us or running. When it snows, we occasionally take them skiing with us as well.",
                    "requested_dog_info": "Does your dog get along with other dogs because I have two.",
                    "cover_photo": null,
                    "attributes": [
                        {
                            "key": "oral-medication",
                            "text": "Oral Medication Administration",
                            "icon": "oral-meds-yes"
                        }
                    ],
                    "hosting_service_preferences": {
                        "accepted_dogs_attributes": [
                            {
                                "key": "small",
                                "text": "Accepts small dogs",
                                "icon": "dog-size-sm",
                                "value": "0-15",
                                "active": true
                            },
                            {
                                "key": "medium",
                                "text": "Accepts medium dogs",
                                "icon": "dog-size-md",
                                "value": "16-40",
                                "active": true
                            },
                            {
                                "key": "large",
                                "text": "Accepts large dogs",
                                "icon": "dog-size-lg",
                                "value": "41-100",
                                "active": true
                            },
                            {
                                "key": "giant",
                                "text": "Doesn't accept giant dogs",
                                "icon": "dog-size-xl",
                                "value": "101+",
                                "active": false
                            }
                        ],
                        "dogs_preferences_attributes": [
                            {
                                "key": "dogs-over-one-year-old",
                                "text": "Dogs Over 1 Year Old",
                                "icon": "has-dogs"
                            }
                        ],
                        "dogs_experience_attributes": [
                            {
                                "key": "dogs-allowed-on-bed",
                                "text": "Dogs Not Allowed On Bed",
                                "icon": "bed-no"
                            },
                            {
                                "key": "dogs-allowed-on-furniture",
                                "text": "Dogs Allowed On Furniture",
                                "icon": "furniture-yes"
                            },
                            {
                                "key": "time-alone",
                                "text": "Potty Breaks Every 4-8 Hours",
                                "icon": "break-time"
                            }
                        ],
                        "attributes": [
                            {
                                "key": "building-type",
                                "text": "Lives in a House",
                                "icon": "house"
                            },
                            {
                                "key": "yard-type",
                                "text": "Has a Fenced Yard",
                                "icon": "fenced"
                            },
                            {
                                "key": "non-smoking",
                                "text": "Non-Smoking Household",
                                "icon": "non-smoking"
                            },
                            {
                                "key": "dogs",
                                "text": "Has 2 Dogs, No Other Pets",
                                "icon": "has-dogs"
                            },
                            {
                                "key": "no-children",
                                "text": "No Children Present",
                                "icon": "children-no"
                            }
                        ]
                    },
                    "traveling_service_preferences": {
                        "accepted_dogs_attributes": [
                            {
                                "key": "small",
                                "text": "Accepts small dogs",
                                "icon": "dog-size-sm",
                                "value": "0-15",
                                "active": true
                            },
                            {
                                "key": "medium",
                                "text": "Accepts medium dogs",
                                "icon": "dog-size-md",
                                "value": "16-40",
                                "active": true
                            },
                            {
                                "key": "large",
                                "text": "Accepts large dogs",
                                "icon": "dog-size-lg",
                                "value": "41-100",
                                "active": true
                            },
                            {
                                "key": "giant",
                                "text": "Accepts giant dogs",
                                "icon": "dog-size-xl",
                                "value": "101+",
                                "active": true
                            }
                        ],
                        "dogs_preferences_attributes": [],
                        "dogs_experience_attributes": [],
                        "attributes": []
                    }
                },
                "profile_photo": {
                    "caption": "",
                    "small": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/ehuxdfojgz/original?width=200&height=200&quality=70&fit=cover",
                    "medium": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/ehuxdfojgz/original?width=450&height=450&quality=70&fit=cover",
                    "wide": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/ehuxdfojgz/original?width=750&height=422&quality=70&fit=cover",
                    "wide_retina": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/ehuxdfojgz/original?width=1125&height=633&quality=70&fit=cover",
                    "large_uncropped": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/ehuxdfojgz/original?width=1024&height=1024&quality=70&fit=scale-down",
                    "large_uncropped_retina": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/ehuxdfojgz/original?width=1536&height=1536&quality=70&fit=scale-down",
                    "big_thumb": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/ehuxdfojgz/original?width=100&height=100&quality=70&fit=cover",
                    "is_fallback": false,
                    "original_height": 0,
                    "original_width": 0,
                    "orientation": "square",
                    "url": "https://www.rover.com/api/v4/images/gYMlEM5g/",
                    "urls": {
                        "ordering": "https://www.rover.com/api/v4/images/gYMlEM5g/ordering/"
                    },
                    "index": 2
                },
                "pets": [
                    {
                        "owner": "https://www.rover.com/api/v4/people/Qn1vKOZg/",
                        "url": "https://www.rover.com/api/v4/pets/Q9Kk5lGN/",
                        "web_url": "https://www.rover.com/members/libby-k-dogs-cats-oh-my/dogs/",
                        "urls": {
                            "images": "https://www.rover.com/api/v4/pets/Q9Kk5lGN/images/"
                        },
                        "active": true,
                        "default_image": {
                            "caption": "",
                            "small": "https://www.rover.com/cf-image-cdn/remote/images/pets/Q9Kk5lGN/ezvvltqvye/original?width=200&height=200&quality=70&fit=cover",
                            "medium": "https://www.rover.com/cf-image-cdn/remote/images/pets/Q9Kk5lGN/ezvvltqvye/original?width=450&height=450&quality=70&fit=cover",
                            "wide": "https://www.rover.com/cf-image-cdn/remote/images/pets/Q9Kk5lGN/ezvvltqvye/original?width=750&height=422&quality=70&fit=cover",
                            "wide_retina": "https://www.rover.com/cf-image-cdn/remote/images/pets/Q9Kk5lGN/ezvvltqvye/original?width=1125&height=633&quality=70&fit=cover",
                            "large_uncropped": "https://www.rover.com/cf-image-cdn/remote/images/pets/Q9Kk5lGN/ezvvltqvye/original?width=1024&height=1024&quality=70&fit=scale-down",
                            "large_uncropped_retina": "https://www.rover.com/cf-image-cdn/remote/images/pets/Q9Kk5lGN/ezvvltqvye/original?width=1536&height=1536&quality=70&fit=scale-down",
                            "big_thumb": "https://www.rover.com/cf-image-cdn/remote/images/pets/Q9Kk5lGN/ezvvltqvye/original?width=100&height=100&quality=70&fit=cover",
                            "is_fallback": false,
                            "original_height": 0,
                            "original_width": 0,
                            "orientation": "square",
                            "url": "https://www.rover.com/api/v4/images/gVrlrBJg/",
                            "urls": {
                                "ordering": "https://www.rover.com/api/v4/images/gVrlrBJg/ordering/"
                            },
                            "index": 1
                        },
                        "breeds": [
                            "Australian Kelpie",
                            "Carolina Dog",
                            "Finnish Spitz",
                            "Korean Jindo Dog",
                            "Shiba Inu"
                        ],
                        "care_instructions": "",
                        "veterinary_information": "",
                        "emergency_contact_information": "",
                        "dog_size": "medium",
                        "weight_obj": [
                            {
                                "unit": "lbs",
                                "value": "35"
                            },
                            {
                                "unit": "kg",
                                "value": "16"
                            }
                        ],
                        "is_puppy": false,
                        "breeds_detail": [
                            {
                                "name": "Australian Kelpie",
                                "slug": "australian-kelpie",
                                "short_name": ""
                            },
                            {
                                "name": "Carolina Dog",
                                "slug": "carolina-dog",
                                "short_name": ""
                            },
                            {
                                "name": "Finnish Spitz",
                                "slug": "finnish-spitz",
                                "short_name": ""
                            },
                            {
                                "name": "Korean Jindo Dog",
                                "slug": "korean-jindo-dog",
                                "short_name": ""
                            },
                            {
                                "name": "Shiba Inu",
                                "slug": "shiba-inu",
                                "short_name": ""
                            }
                        ],
                        "pk": 7153291,
                        "name": "Stella",
                        "pet_type": "dog",
                        "weight": 35,
                        "birthday": "2016-01-25",
                        "birthday_display": "4 years, 1 month old",
                        "implant": true,
                        "spayed_neutered": true,
                        "description": "",
                        "special_requirements": "",
                        "gender": "f",
                        "house_trained": true,
                        "house_trained_desc": "",
                        "plays_children": true,
                        "plays_children_desc": "",
                        "plays_dogs": true,
                        "plays_dogs_desc": "",
                        "plays_cats": true,
                        "plays_cats_desc": "",
                        "pet_details": [],
                        "notes": null
                    },
                    {
                        "owner": "https://www.rover.com/api/v4/people/Qn1vKOZg/",
                        "url": "https://www.rover.com/api/v4/pets/Q9Kk5kzN/",
                        "web_url": "https://www.rover.com/members/libby-k-dogs-cats-oh-my/dogs/",
                        "urls": {
                            "images": "https://www.rover.com/api/v4/pets/Q9Kk5kzN/images/"
                        },
                        "active": true,
                        "default_image": {
                            "caption": "",
                            "small": "https://www.rover.com/cf-image-cdn/remote/images/pets/Q9Kk5kzN/enbjwiilje/original?width=200&height=200&quality=70&fit=cover",
                            "medium": "https://www.rover.com/cf-image-cdn/remote/images/pets/Q9Kk5kzN/enbjwiilje/original?width=450&height=450&quality=70&fit=cover",
                            "wide": "https://www.rover.com/cf-image-cdn/remote/images/pets/Q9Kk5kzN/enbjwiilje/original?width=750&height=422&quality=70&fit=cover",
                            "wide_retina": "https://www.rover.com/cf-image-cdn/remote/images/pets/Q9Kk5kzN/enbjwiilje/original?width=1125&height=633&quality=70&fit=cover",
                            "large_uncropped": "https://www.rover.com/cf-image-cdn/remote/images/pets/Q9Kk5kzN/enbjwiilje/original?width=1024&height=1024&quality=70&fit=scale-down",
                            "large_uncropped_retina": "https://www.rover.com/cf-image-cdn/remote/images/pets/Q9Kk5kzN/enbjwiilje/original?width=1536&height=1536&quality=70&fit=scale-down",
                            "big_thumb": "https://www.rover.com/cf-image-cdn/remote/images/pets/Q9Kk5kzN/enbjwiilje/original?width=100&height=100&quality=70&fit=cover",
                            "is_fallback": false,
                            "original_height": 0,
                            "original_width": 0,
                            "orientation": "square",
                            "url": "https://www.rover.com/api/v4/images/gVrlr6Vg/",
                            "urls": {
                                "ordering": "https://www.rover.com/api/v4/images/gVrlr6Vg/ordering/"
                            },
                            "index": 1
                        },
                        "breeds": [
                            "Miniature Australian Shepherd",
                            "Mixed"
                        ],
                        "care_instructions": "",
                        "veterinary_information": "",
                        "emergency_contact_information": "",
                        "dog_size": "medium",
                        "weight_obj": [
                            {
                                "unit": "lbs",
                                "value": "30"
                            },
                            {
                                "unit": "kg",
                                "value": "14"
                            }
                        ],
                        "is_puppy": false,
                        "breeds_detail": [
                            {
                                "name": "Miniature Australian Shepherd",
                                "slug": "miniature-australian-shepherd",
                                "short_name": "Mini Aussie"
                            },
                            {
                                "name": "Mixed",
                                "slug": "mixed",
                                "short_name": "Mixed Breed"
                            }
                        ],
                        "pk": 7153303,
                        "name": "Harley",
                        "pet_type": "dog",
                        "weight": 30,
                        "birthday": "2014-07-25",
                        "birthday_display": "5 years, 7 months old",
                        "implant": false,
                        "spayed_neutered": true,
                        "description": "",
                        "special_requirements": "",
                        "gender": "f",
                        "house_trained": true,
                        "house_trained_desc": "",
                        "plays_children": false,
                        "plays_children_desc": "",
                        "plays_dogs": true,
                        "plays_dogs_desc": "",
                        "plays_cats": true,
                        "plays_cats_desc": "",
                        "pet_details": [],
                        "notes": null
                    }
                ]
            },
            "sitter_card_checkboxes": [
                "Home Full-Time",
                "Responds Quickly"
            ],
            "ratings_count": 2,
            "overlaps_holiday": false,
            "url": "https://www.rover.com/api/v4/people/Qn1vKOZg/",
            "currency": "USD",
            "provider_web_url": "https://www.rover.com/members/libby-k-dogs-cats-oh-my/",
            "title": "Dogs, Cats Oh my!",
            "cat_price": 25,
            "thumb": "https://www.rover.com/cf-image-cdn/remote/images/people/Qn1vKOZg/ehuxdfojgz/original?width=80&height=80&quality=70&fit=cover",
            "latitude": "45.683",
            "person_name": "Libby K.",
            "pct_stays_with_photos": 100.0,
            "zip": "59718",
            "badge_data": [
                {
                    "title": "Verified Background Check",
                    "content": "This sitter has successfully passed a basic <a href=\"/background-checks/\">background check</a> by a third party provider.",
                    "image_url": "//dt0499hd9onpe.cloudfront.net/badges/verified-background-check/icons/icon_eff390b1.png",
                    "show_on_search": true
                },
                {
                    "title": "Rover 101",
                    "content": "This sitter has completed <a href=\"https://www.rover.com/sitter-training\">Rover 101</a> for pet care best practices.",
                    "image_url": "//dt0499hd9onpe.cloudfront.net/badges/rover-training-graduate/icons/icon_1357faa9.png",
                    "show_on_search": true
                }
            ],
            "price_obj": {
                "amount": "30.00",
                "currency_iso": "USD"
            },
            "review_text": "Wonderful people to take care of our oup, and we’ll request them again! Libby administered meds as needed and provided photos of our older pup while she took great care of him.",
            "reviews": [
                {
                    "content": "My dog, Walter, returned home settled and calm after a long stay with Libby and her crew. This was great to see as this is not always the case with him as he needs a clear and attentive environment to feel safe and regulated. I will definitely request Libby’s great care again!",
                    "dog_photo_url": "https://www.rover.com/cf-image-cdn/remote/images/pets/Yg4yd71Q/iufbplifyo/original.jpg?width=100&height=100&quality=70&fit=cover"
                },
                {
                    "content": "Wonderful people to take care of our oup, and we’ll request them again! Libby administered meds as needed and provided photos of our older pup while she took great care of him.",
                    "dog_photo_url": "https://www.rover.com/cf-image-cdn/remote/images/pets/Adm7ZbjN/aszaugblsf/original?width=100&height=100&quality=70&fit=cover"
                }
            ],
            "is_accepting_new_customers": true,
            "distance_from_search_center": "20.65",
            "distance_from_search_center_obj": {
                "distance": "20.65",
                "distance_unit": "mi",
                "distance_display": "20.6 mi. away",
                "distance_default_unit": "20.65"
            },
            "person_opk": "Qn1vKOZg",
            "state": "MT",
            "highlighted_features": null,
            "result_number": 1,
            "summary_url": "https://www.rover.com/api/v4/people/Qn1vKOZg/summary/"
        }
    ],
    "query": {
        "service_type": "overnight-boarding",
        "location": "",
        "location_type": "other",
        "raw_location_types": null,
        "zoomlevel": 12,
        "minlat": null,
        "minlng": null,
        "maxlat": null,
        "maxlng": null,
        "centerlat": "45.469500",
        "centerlng": "-111.394000",
        "radius": null,
        "page": 1,
        "per_page": 20,
        "min_rating": null,
        "minprice": 1,
        "maxprice": 150,
        "small_dogs": false,
        "medium_dogs": false,
        "large_dogs": false,
        "giant_dogs": false,
        "pet": [],
        "pet_type": "",
        "breeds": "",
        "excluded_providers": [],
        "user": null,
        "start_date": null,
        "end_date": null,
        "monday": false,
        "tuesday": false,
        "wednesday": false,
        "thursday": false,
        "friday": false,
        "saturday": false,
        "sunday": false,
        "spaces_required": null,
        "dog_preference": "no_pref",
        "max_time_alone": null,
        "agency": [],
        "provider_group": [],
        "search_score_debug": false,
        "houses": false,
        "apartments": false,
        "frequency": "",
        "morning_availability": false,
        "midday_availability": false,
        "evening_availability": false,
        "fulltime_availability": false,
        "accepts_only_one_client": false,
        "person_does_not_have_dogs": false,
        "no_cats": false,
        "no_caged_pets": false,
        "has_no_children": false,
        "no_children_0_5": false,
        "no_children_6_12": false,
        "has_house": false,
        "knows_first_aid": false,
        "dogs_allowed_on_furniture": false,
        "has_fenced_yard": false,
        "dogs_allowed_on_bed": false,
        "non_smoking": false,
        "volunteer_donor": false,
        "apse": false,
        "petsitusa": false,
        "cat_care": false,
        "puppy": false,
        "senior_dog_care": false,
        "is_premier": false,
        "bathing_grooming": false,
        "injected_medication": false,
        "special_needs": false,
        "oral_medication": false,
        "more_than_one_client": false,
        "uncrated_dogs": false,
        "unspayed_females": false,
        "non_neutered_males": false,
        "females_in_heat": false,
        "unactivated_provider": false,
        "premier_matching": false,
        "premier_or_rover_match": false,
        "is_member_of_sitter_to_sitter": false,
        "is_member_of_sitter_to_sitter_plus": false,
        "daily_exercise": false,
        "minimum_reviews": null,
        "minimum_reviews_and_repeats": null,
        "minimum_repeats": null
    },
    "date_constrained": false,
    "derived_data": {
        "search_type": "standard",
        "use_split_test_scores": true,
        "person": null,
        "is_bounding_box": false,
        "zoom_method": "dass",
        "api_version": "v4",
        "excluded_person_ids": [],
        "components_tags_hashes": {
            "search_to_profile": "f9065fa7389750e16fe00d7ba36748f61d3e0df6",
            "profile_to_request": "bcb333ddd8b61ad020dbed686ed969e7cd970c2d",
            "request_to_book": "f9065fa7389750e16fe00d7ba36748f61d3e0df6",
            "expected_lifetime_units": "f9065fa7389750e16fe00d7ba36748f61d3e0df6",
            "take_per_unit": "f9065fa7389750e16fe00d7ba36748f61d3e0df6",
            "marketplace_multiplier": "50d1d0fa0fe59a535283c99a57b1a782b7b8f56f",
            "matriculation_level": "f9065fa7389750e16fe00d7ba36748f61d3e0df6",
            "discover_new_sitters_score": "f9065fa7389750e16fe00d7ba36748f61d3e0df6"
        },
        "center": [
            "45.469500",
            "-111.394000"
        ],
        "minlat": "45.42418139648437",
        "minlng": "-111.43931860351563",
        "maxlat": "45.51481860351562",
        "maxlng": "-111.34868139648438",
        "zoomlevel": 12,
        "days_of_week_int": 0,
        "zip_code": "59729",
        "cbsa": null,
        "country_code": "US",
        "location_type": "other",
        "spaces_required": 1,
        "currency_symbol": "$",
        "currency_iso": "USD",
        "price_filter_min_value": 1,
        "price_filter_max_value": 150,
        "price_filter_increment_value": 1
    },
    "service_type": "overnight-boarding",
    "service_results_header": "Dog Boarding",
    "query_description": "",
    "count": 75,
    "previous": null,
    "next": "https://www.rover.com/api/v4/search/?service_type=overnight-boarding&centerlat=45.4695&centerlng=-111.394&page=2"
}
```
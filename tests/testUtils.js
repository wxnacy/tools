

let data = {
    "data": [
        {
            "ad_list": [],
            "content_list": [
                {
                    "backup_url": "http://vegoplus.cdn.ottcloud.tv/publicspace/videos/2018/201801w4/anmo7.mp4",
                    "id": 14339,
                    "play_mode": "download",
                    "resource_id": 14339,
                    "resource_type": "content",
                    "title": "按摩：七",
                    "type": "video",
                    "url": "https://www.youtube.com/watch?v=Qm2LokrK6sY"

                },
                {
                    "backup_url": "http://vegoplus.cdn.ottcloud.tv/publicspace/videos/2018/201801w4/anmo6.mp4",
                    "id": 14338,
                    "play_mode": "download",
                    "resource_id": 14338,
                    "resource_type": "content",
                    "title": "按摩：六",
                    "type": "video",
                    "url": "https://www.youtube.com/watch?v=NXzeCq_MGK0"

                },
                {
                    "backup_url": "http://vegoplus.cdn.ottcloud.tv/publicspace/videos/2018/201801w4/anmo5.mp4",
                    "id": 14337,
                    "play_mode": "download",
                    "resource_id": 14337,
                    "resource_type": "content",
                    "title": "按摩：五",
                    "type": "video",
                    "url": "https://www.youtube.com/watch?v=GbZ0bnWIUCM"

                },
                {
                    "backup_url": "http://vegoplus.cdn.ottcloud.tv/publicspace/videos/2018/201801w4/anmo4.mp4",
                    "id": 14336,
                    "play_mode": "download",
                    "resource_id": 14336,
                    "resource_type": "content",
                    "title": "按摩：四",
                    "type": "video",
                    "url": "https://www.youtube.com/watch?v=lKkGzPof5aw"

                },
                {
                    "backup_url": "http://vegoplus.cdn.ottcloud.tv/publicspace/videos/2018/201801w4/anmo3.mp4",
                    "id": 14335,
                    "play_mode": "download",
                    "resource_id": 14335,
                    "resource_type": "content",
                    "title": "按摩：三",
                    "type": "video",
                    "url": "https://www.youtube.com/watch?v=WphwC78__m4"

                },
                {
                    "backup_url": "http://vegoplus.cdn.ottcloud.tv/publicspace/videos/2018/201801w4/anmo2.mp4",
                    "id": 14334,
                    "play_mode": "download",
                    "resource_id": 14334,
                    "resource_type": "content",
                    "title": "按摩：二",
                    "type": "video",
                    "url": "https://www.youtube.com/watch?v=27TevyvJEaY"

                },
                {
                    "backup_url": "http://vegoplus.cdn.ottcloud.tv/publicspace/videos/2018/201801w4/anmo1.mp4",
                    "id": 14333,
                    "play_mode": "download",
                    "resource_id": 14333,
                    "resource_type": "content",
                    "title": "按摩：一",
                    "type": "video",
                    "url": "https://www.youtube.com/watch?v=LEgkufKTFxU"

                }

            ],
            "content_type": "video",
            "screen_flagment_id": 1

        },
        {
            "screen_flagment_id": 2,
            "url": "http://mewe.gochinatv.com/carousel/AA7EIV?shopid=566"

        }

    ],
    "message": "",
    "status": 200,
    "version": 1518180160
}

// JSON.prototype.filter = (filters) => {
    // console.log(filters);
// }
if(typeof(String.prototype.trim) === "undefined")
{
    String.prototype.trim = function()
    {
        return String(this).replace(/^\s+|\s+$/g, '');
    };
}
Object.prototype.filter = (filter) => {
    console.log(filter);
    let filters = filter.split(',')
    let result = {}
    for(let v of filters){
        v = v.trim()
        console.log(v);
        if( v.indexOf('.') > -1 ){
            let key = v.split('.')[0]
            let key1 = v.split('.')[1]
            if( !v.hasOwnProperty(key) ){
                continue
            }
            if( typeof(data[v]) === Object){

                result[key][key1] = data[key][key1]
            } else if( typeof(data[v]) === Array ){
                
            }
        } else {
            result[v] = data[v]
        }
    }
    return result
}
let res = data.filter('status, message, data.screen_flagment_id')
console.log(res);

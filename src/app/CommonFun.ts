import validator from 'validator';
import moment from 'moment'
export const getCurWidth = function(){
    return document.body.offsetWidth;
}

export const divideImgArr = function(dataArr, k){
    let res = [];
    let p = 0;
    let cur = [];
    while (p < dataArr.length){
        if(p % k == 0){
            if(p != 0){
                res.push(cur);
            }
            cur = [];
        }
        cur.push(dataArr[p]);
        p++;
        if(p == dataArr.length){
            res.push(cur);
        }
    }
    return res;
}
export const filterNullMovieArrInCarousel = function(dataArr){
    let res = [];
    for(let i = 0; i < dataArr.length; i++){
        let cur = {
            id:null,
            title:null,
            poster_path:null,
            backdrop_path:null,
            type:null,
        }
        cur.id = !dataArr[i].id ? null:dataArr[i].id;
        cur.title = !dataArr[i].title ? null:dataArr[i].title;
        cur.poster_path = !dataArr[i].poster_path ? "https://cinemaone.net/images/movie_placeholder.png":"https://image.tmdb.org/t/p/w500" + dataArr[i].poster_path;
        cur.backdrop_path = !dataArr[i].backdrop_path ? "https://bytes.usc.edu/cs571/s21_JSwasm00/hw/HW6/imgs/movie-placeholder.jpg":"https://image.tmdb.org/t/p/w500" + dataArr[i].backdrop_path;
        cur.type = "movie";
        res.push(cur);
    }
    return res;
}
export const filterNullTvArrInCarousel = function(dataArr){
    let res = [];
    for(let i = 0; i < dataArr.length; i++){
        let cur = {
            id:null,
            title:null,
            poster_path:null,
            backdrop_path:null,
            type:null,
        }
        cur.id = !dataArr[i].id ? null:dataArr[i].id;
        cur.title = !dataArr[i].name ? null:dataArr[i].name;
        cur.poster_path = !dataArr[i].poster_path ? "https://cinemaone.net/images/movie_placeholder.png":"https://image.tmdb.org/t/p/w500" + dataArr[i].poster_path;
        cur.backdrop_path = !dataArr[i].backdrop_path ? "https://bytes.usc.edu/cs571/s21_JSwasm00/hw/HW6/imgs/movie-placeholder.jpg":"https://image.tmdb.org/t/p/w500" + dataArr[i].backdrop_path;
        cur.type = "tv";
        res.push(cur);
    }
    return res;
}
const getGenre = function(genreArr){
    let res = '';
    for(let i = 0; i < genreArr.length; i++){
        res += genreArr[i].name;
        if(i != genreArr.length - 1){
            res += ', ';
        }
    }
    return res;
}
const getLanguages = function(languageArr){
    let res = '';
    for(let i = 0; i < languageArr.length; i++){
        res += languageArr[i].english_name;
        if(i != languageArr.length - 1){
            res += ', ';
        }
    }
    return res;
}
const getRuntime = function(time){
    let res = '';
    let hour = Math.floor(time / 60);
    let minute = time - hour * 60;
    if(hour !== 0){
        res += hour + 'hrs ';
    }
    if(minute !== 0){
        res += minute + 'mins';
    }
    return res;
}
export const initDetail = function(){
    let res = {
        title: '',
        genres: '',
        spoken_languages: '',
        overview: '',
        release_date: '',
        tagline: '',
        vote_average : '',
        runtime : '',
        poster_path : '',
        backdrop_path : '',
    };
    return res;
}
export const filterNullMovieDetail = function(data){
    let res = {
        title: !data.title ? '':data.title,
        genres: !data.genres ? '':getGenre(data.genres),
        spoken_languages: !data.spoken_languages ? '':getLanguages(data.spoken_languages),
        overview: !data.overview ? '':data.overview,
        release_date: !data.release_date ? '':data.release_date.slice(0,4),
        tagline: !data.tagline ? '':data.tagline,
        vote_average : !data.vote_average ? '':'★ ' + data.vote_average,
        runtime : !data.runtime ? '':getRuntime(data.runtime),
        poster_path : !data.poster_path ? "https://cinemaone.net/images/movie_placeholder.png":"https://image.tmdb.org/t/p/w500" + data.poster_path,
        backdrop_path : !data.backdrop_path ? "https://bytes.usc.edu/cs571/s21_JSwasm00/hw/HW6/imgs/movie-placeholder.jpg":"https://image.tmdb.org/t/p/w500" + data.backdrop_path
    };
    return res;
}

export const filterNullTvDetail = function(data){
    let res = {
        title: !data.name ? '':data.name,
        genres: !data.genres ? '':getGenre(data.genres),
        spoken_languages: !data.spoken_languages ? '':getLanguages(data.spoken_languages),
        overview: !data.overview ? '':data.overview,
        release_date: !data.first_air_date ? '':data.first_air_date.slice(0,4),
        tagline: !data.tagline ? '':data.tagline,
        vote_average : !data.vote_average ? '':'★ ' + data.vote_average,
        runtime : !data.episode_run_time ? '':getRuntime(data.episode_run_time),
        poster_path : !data.poster_path ? "https://cinemaone.net/images/movie_placeholder.png":"https://image.tmdb.org/t/p/w500" + data.poster_path,
        backdrop_path : !data.backdrop_path ? "https://bytes.usc.edu/cs571/s21_JSwasm00/hw/HW6/imgs/movie-placeholder.jpg":"https://image.tmdb.org/t/p/w500" + data.backdrop_path
    };
    return res;
}
export const generateYearTimeVote = function(dataArr) {
    let res = '';
    if(!!dataArr.release_date){
        res += dataArr.release_date;
        if(!!dataArr.vote_average || !!dataArr.runtime){
            res += '  | ';
        }
    }
    if(!!dataArr.vote_average){
        res += ' '
        res += dataArr.vote_average;
        if(!!dataArr.runtime){
            res += ' | ';
        }
    }
    if(!!dataArr.runtime){
        res += dataArr.runtime;
    }
    return res;
}
export const initVideo = function(){
    let obj = {
        site:'',
        type:'',
        name:'',
        key:''
      };
      return obj;
}
export const filterVideo = function(dataArr){
    let res = {
        site:'',
        type:'',
        name:'',
        key:'tzkWB85ULJY'
    }
    for(let i = 0; i < dataArr.length; i++){
        if(dataArr[i].type === 'Trailer'){
            res.site = !dataArr[i].site? '': dataArr[i].site ;
            res.type = !dataArr[i].type? '': dataArr[i].type ;
            res.name = !dataArr[i].name? '': dataArr[i].name ;
            res.key = !dataArr[i].key? 'tzkWB85ULJY': dataArr[i].key ;
            return res;
        }
        if(dataArr[i].type === 'Teaser'){
            res.site = !dataArr[i].site? '': dataArr[i].site ;
            res.type = !dataArr[i].type? '': dataArr[i].type ;
            res.name = !dataArr[i].name? '': dataArr[i].name ;
            res.key = !dataArr[i].key? 'tzkWB85ULJY': dataArr[i].key ;
        }
    }
    return res;
}
export const filterCast = function(dataArr){
    let res = [];
    for(let i = 0; i < dataArr.length; i++){
        if(!!dataArr[i].profile_path){
            let cur = {
                id : !dataArr[i].id ? '' : dataArr[i].id,
                name : !dataArr[i].name ? '' : dataArr[i].name,
                character : !dataArr[i].character ? '' : dataArr[i].character,
                profile_path : 'https://image.tmdb.org/t/p/w500' + dataArr[i].profile_path
            }
            res.push(cur);
        }
    }
    return res;
}
const generateAvaPath = function (avaPath) {
    let res = '';
    let options = {
        require_protocol: true
    }
    if(validator.isURL(avaPath.slice(1),options)){
        res = avaPath.slice(1);
    }
    else{
        res = 'https://image.tmdb.org/t/p/original/' + avaPath.slice(1);
    }
    return res;
}
export const filterReview = function(dataArr){
    let res = [];
    for(let i = 0; i < Math.min(dataArr.length,10); i++){
        let cur = {
            author : !dataArr[i].author ? '' : dataArr[i].author,
            content : !dataArr[i].content ? '' : dataArr[i].content,
            created_at : !dataArr[i].created_at ? '' : moment(dataArr[i].created_at).format('LL') + ', ' + moment(dataArr[i].created_at).format('LTS'),
            url : !dataArr[i].url ? '' : dataArr[i].url,
            rating : !dataArr[i].author_details || !dataArr[i].author_details.rating ? '★ ' + 0 : '★ ' + dataArr[i].author_details.rating,
            avatar_path : !dataArr[i].author_details || !dataArr[i].author_details.avatar_path ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnPmUvFLjjmoYWAbLTEmLLIRCPpV_OgxCVA&usqp=CAU' : generateAvaPath(dataArr[i].author_details.avatar_path),
        }
        res.push(cur);
    }
    return res;
}
export const initCastDetail = function(){
    let res = {};
    res = {
        birthday: '',
        gender:'',
        name: '',
        homepage: '',
        also_know_as: '',
        known_for_department : '',
        place_of_birth : '',
        biography: '',
        profile_path: ''
    }
    return res;
}
export const generateAlsoKnow = function (dataArr) {
    let res = "Also Known as: ";
    for(let i = 0; i < dataArr.length; i++){
        res += dataArr[i];
        if(i != dataArr.length - 1){
            res += ','
        }
    }
    return res;
}
export const filterCastDetail = function(data){
    let res = {};
    res = {
        birthday: !data.birthday ? '': 'Birth: ' + data.birthday,
        gender: !data.gender || data.gender === 0 ? '': 'Gender: ' + (data.gender === 1 ? 'Female':'Male'),
        name: !data.name ? '': data.name,
        homepage: !data.homepage ? '': 'Website: ' + data.homepage,
        also_known_as: !data.also_known_as || data.also_known_as.length === 0 ? '': generateAlsoKnow(data.also_known_as),
        known_for_department : !data.known_for_department ? '' : 'Know for: ' + data.known_for_department,
        place_of_birth : !data.place_of_birth ? '' : 'Birth Place: ' + data.place_of_birth,
        biography: !data.biography ? '': data.biography,
        profile_path : !data.profile_path ? 'https://bytes.usc.edu/cs571/s21_JSwasm00/hw/HW6/imgs/person-placeholder.png': 'https://image.tmdb.org/t/p/w500' + data.profile_path
    }
    return res;
}
export const initExternal = function(){
    let res = {};
    res = {
        imdb_id : '',
        facebook_id : '',
        instagram_id : '',
        twitter_id : ''
    }
    return res;
}
export const filterExternal = function (data) {
    let res = {};
    res = {
        imdb_id : !data.imdb_id ? '':'https://imdb.com/name/' + data.imdb_id,
        facebook_id : !data.facebook_id ? '':'https://facebook.com/' + data.facebook_id,
        instagram_id : !data.instagram_id ? '':'https://instagram.com/'+ data.instagram_id,
        twitter_id : !data.twitter_id  ? '':'https://twitter.com/' + data.twitter_id
    }
    return res;
}
export const initSearch = function(){
    let res = [];
    let cur = {};
    cur = {
        id : '',
        name : '',
        backdrop_path : '',
        media_type : ''
    }
    res.push(cur);
    return res;
}
export const filterSearch = function (dataArr){
    let res = [];
    for(let i = 0; i < dataArr.length; i++){
        if(dataArr[i].media_type === 'tv'){
            let cur = {
                id : ! dataArr[i].id ? '':dataArr[i].id,
                name : ! dataArr[i].name ? '':dataArr[i].name.slice(0,30),
                backdrop_path : ! dataArr[i].backdrop_path ? 'https://bytes.usc.edu/cs571/s21_JSwasm00/hw/HW6/imgs/movie-placeholder.jpg': 'https://image.tmdb.org/t/p/w500' + dataArr[i].backdrop_path,
                media_type : ! dataArr[i].media_type ? '': dataArr[i].media_type
            }
            res.push(cur);
        }
        else if(dataArr[i].media_type === 'movie'){
            let cur = {
                id : ! dataArr[i].id ? '':dataArr[i].id,
                name : ! dataArr[i].title ? '':dataArr[i].title.slice(0,30),
                backdrop_path : ! dataArr[i].backdrop_path ? 'https://bytes.usc.edu/cs571/s21_JSwasm00/hw/HW6/imgs/movie-placeholder.jpg': 'https://image.tmdb.org/t/p/w500' + dataArr[i].backdrop_path,
                media_type : ! dataArr[i].media_type ? '': dataArr[i].media_type
            }
            res.push(cur);
        }
    }
    return res;
}
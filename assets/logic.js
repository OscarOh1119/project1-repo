// Starter code for (project1-repo)
// Function to greet the user
function greetUser(name) {
    return `Hello, ${name}! Welcome to project1-repo.`;
}
// Example usage
const userName = 'User';
console.log(greetUser(userName));

document.addEventListener('DOMContentLoaded', function() {                  //DOMContentLoaded event will fire when page is refreshed
    function saveCarouselPosition(carouselId) {
    const carousel= document.querySelector(`#${carouselId}`);                   //use template literal to call different carousel IDs

    carousel.addEventListener(`slid.bs.carousel`, function(event) {            //slid.bs.carousel is fired when the carousel has completed its slide transition according to Bootstrap
        const activeIndex= event.to;                                              //slide.bs.carousel fires when the slide instance method is invoked
        localStorage.setItem(`${carouselId}-activeIndex`,activeIndex);              //sets carouselID-active index as key for active index value
    })

    const currentIndex = localStorage.getItem(`${carouselId}-activeIndex`);     //stores the current index 

    if(currentIndex !== null) {
    let carouselSaved = new bootstrap.Carousel(carousel);                       
    carouselSaved.to(parseInt(currentIndex));
    }
 }

saveCarouselPosition(`josh-container`);
saveCarouselPosition(`jonathan-container`);
saveCarouselPosition(`oscar-container`);                
})

const imdbShows = [`https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/396999a6-3fff-4af3-802b-10c46d10deff/b2551336ecc42f4e68fe8f10c4a441a3ec388e28.jpg?host=wbd-images.prod-vod.h264.io&partner=beamcom`,`https://9to5toys.com/wp-content/uploads/sites/5/2017/06/planet-earth-ii.jpg?w=1000`, `https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/43bcd380-b62e-4c46-a140-e2682c10a3ce/c7295d3b-d50a-11ee-a7fe-0288acd57a89?host=wbd-images.prod-vod.h264.io&partner=beamcom`, `https://m.media-amazon.com/images/M/MV5BMzFhMDQ5MTItMjllMy00YmM2LTk3NmYtY2I3MTIxMzAyNDFlXkEyXkFqcGdeQW1pYnJ5YW50._V1_.jpg`,`https://theilluminerdi.com/wp-content/uploads/2021/02/Avatar-the-last-airbender-header.jpg`, `https://watchdocumentaries.com/wp-content/uploads/blue-planet-ii.jpg`, `https://planetary.s3.amazonaws.com/web/assets/pictures/20140506_Cosmos_layers-off.jpg`,`https://www.bbcchildreninneed.co.uk/wp-content/uploads/2024/11/Bluey-Fundraising-Site-Main-Artwork-960x540.png`,`https://uktv-res.cloudinary.com/image/upload/v1717494123/qselrew7yne5ldggjyyq.jpg`,`https://img2.hulu.com/user/v3/artwork/213ddd1e-0c45-4f84-bb25-ea90ffd6507c?base_image_bucket_name=image_manager&base_image=0146206f-bb2a-4335-8855-bd89ed627079&size=1200x630&format=webp`,`https://images.thedirect.com/media/article_full/rick-morty-season-release.jpg`,`https://m.media-amazon.com/images/S/pv-target-images/d37b95f4c1e97dd0451113295d267681a70d0f16293421f0c89ef715f77081aa.jpg`,`https://cdn.kqed.org/wp-content/uploads/sites/12/2019/01/twilight_zone_banner_0-800x453.jpg`, `https://static1.moviewebimages.com/wordpress/wp-content/uploads/2022/11/Benedict-Cumberbatch-star-of-Sherlock-the-BBC-TV-adaptation-of-Sherlock-Holmes.jpg`,`https://www.awn.com/sites/default/files/styles/original/public/image/featured/attack_on_titan_oad_-_episode_3_-_1280x720.jpg?itok=OXYAGhrm`]

const imdbLinks= [`https://www.imdb.com/title/tt7366338/?ref_=chttvtp_t_5`,`https://www.imdb.com/title/tt5491994/?ref_=chttvtp_t_2`, `https://www.imdb.com/title/tt0795176/?ref_=chttvtp_t_3`, `https://www.imdb.com/title/tt0185906/?ref_=chttvtp_t_4`, `https://www.imdb.com/title/tt0417299/?ref_=chttvtp_t_7`, `https://www.imdb.com/title/tt6769208/?ref_=chttvtp_t_8`,`https://www.imdb.com/title/tt2395695/?ref_=chttvtp_t_10`, `https://www.imdb.com/title/tt7678620/?ref_=chttvtp_t_14`,`https://www.imdb.com/title/tt0071075/?ref_=chttvtp_t_15`,`https://www.imdb.com/title/tt1355642/?ref_=chttvtp_t_16`,`https://www.imdb.com/title/tt2861424/?ref_=chttvtp_t_17`,`https://www.imdb.com/title/tt8420184/?ref_=chttvtp_t_19`, `https://www.imdb.com/title/tt0052520/?ref_=chttvtp_t_20`,`https://www.imdb.com/title/tt1475582/?ref_=chttvtp_t_22`,`https://www.imdb.com/title/tt2560140/?ref_=chttvtp_t_23`]

const imdbImage = document.getElementById(`imdb-image`);
const imdbButton = document.getElementById('imdb-button');
const theWireButton = document.getElementById('the-wire-button');
const snowfallButton = document.getElementById(`snowfall-button`);
const theSopranosButton = document.getElementById('the-sopranos-button');
const vikingsButton = document.getElementById(`vikings-button`);
const siloButton = document.getElementById(`silo-button`);
const GoTButton = document.getElementById(`game-of-thrones-button`);
const penguinButton = document.getElementById(`the-penguin-button`);
const chefButton = document.getElementById(`chef-table-button`);
const tedLassoButton = document.getElementById(`ted-lasso-button`);
const breakingBadButton = document.getElementById(`breaking-bad-button`);
const betterCallButton = document.getElementById(`better-call-saul-button`);
const crashLandingButton = document.getElementById(`crash-landing-on-you-button`);
const severanceButton = document.getElementById(`severance-button`);
const lionessButton = document.getElementById(`lioness-button`);
const entourageButton = document.getElementById(`entourage-button`);



function getRandomIndex(value) {
    return Math.floor(Math.random()*value);
}
let rndIndex=getRandomIndex(15);
document.addEventListener(`DOMContentLoaded`, function(){
    imdbImage.setAttribute(`src`,imdbShows[rndIndex]);
})

imdbButton.addEventListener("click", function(){
    document.location.href = imdbLinks[rndIndex];
})

theWireButton.addEventListener("click", function(){
    document.location.href = 'https://www.imdb.com/title/tt0306414/?ref_=chttvtp_t_6';
})

snowfallButton.addEventListener("click", function(){
    document.location.href = `https://www.imdb.com/title/tt6439752/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_snowfall`;
})

theSopranosButton.addEventListener("click", function(){
    document.location.href = `https://www.imdb.com/title/tt0141842/?ref_=chttvtp_t_9`;
})

vikingsButton.addEventListener("click", function(){
    document.location.href = `https://www.imdb.com/title/tt2306299/?ref_=nv_sr_srsg_0_tt_7_nm_1_in_0_q_vikings`;
})

siloButton.addEventListener("click", function(){
    document.location.href = `https://www.imdb.com/title/tt14688458/?ref_=nv_sr_srsg_0_tt_7_nm_1_in_0_q_silo`;
})

GoTButton.addEventListener("click", function(){
    document.location.href = `https://www.imdb.com/title/tt0944947/?ref_=chttvtp_t_13`;
})

penguinButton.addEventListener("click", function(){
    document.location.href = `https://www.imdb.com/title/tt15435876/?ref_=chttvtp_t_108`;
})

chefButton.addEventListener("click", function(){
    document.location.href = `https://www.imdb.com/title/tt4295140/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_chef%27s%2520t`;
})

tedLassoButton.addEventListener("click", function(){
    document.location.href = `https://www.imdb.com/title/tt10986410/?ref_=nv_sr_srsg_0_tt_5_nm_3_in_0_q_ted%2520lasso`;
})

breakingBadButton.addEventListener("click", function(){
    document.location.href = `https://www.imdb.com/title/tt0903747/?ref_=chttvtp_t_1`;
})

betterCallButton.addEventListener("click", function(){
    document.location.href = `https://www.imdb.com/title/tt3032476/?ref_=chttvtp_t_26`;
})

crashLandingButton.addEventListener("click", function(){
    document.location.href = `https://www.imdb.com/title/tt10850932/?ref_=chttvtp_t_156`;
})

severanceButton.addEventListener("click", function(){
    document.location.href = `https://www.imdb.com/title/tt11280740/?ref_=chttvtp_t_100`;
})

lionessButton.addEventListener("click", function(){
    document.location.href = `https://www.imdb.com/title/tt13111078/?ref_=nv_sr_srsg_0_tt_7_nm_1_in_0_q_lioness`;
})


entourageButton.addEventListener("click", function(){
    document.location.href = `https://www.imdb.com/title/tt0387199/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_ent`;
})













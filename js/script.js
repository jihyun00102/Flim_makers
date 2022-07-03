//*****header
Vue.component("header-el", {
    data : () => {
        return {
            menuList : [
                ["About", "./about.html"],
                ["Movie", "./movie.html"],
                ["Artist", "./artist.html"],
                ["Audition", "./audition.html"],
                ["Community", "./community.html"],
            ]
        }
    },
    template : `
    <header>
        <div class="wrap">
            <div class="logo">
                <a href="#"><img src="./img/logo_fm.png" alt=""></a>
            </div>
            <nav>
                <ul>
                    <li v-for="list of menuList"><a :href="list[1]">{{list[0]}}</a></li>
                </ul>
            </nav>
        </div>
    </header>
    `
});

Vue.component("bannertop-el", {
    data : () => {
        return {
            slide_img : ["visual.png", "visual_02.png", "visual_03.png", "visual_04.png"]            
        }
    },
    template : `
    <div id="slider">
        <div class="slide_frame">

            <div v-for="list in slide_img" class="slide">
                <div class="bgImg" :style="'background-image:url(./img/'+list+')'"></div>
                <div class="dark"></div>
            </div>

        </div>
        <div class="wrap">
            <div class="text_part">
                <h2>지금부터 당신의 영화가 시작됩니다.</h2>
                <a href="#">오디션 참가</a>
            </div>
        </div>

    </div>
    `
    //반복되는 과정상 스타일 선언이 안됨 => 하위요소에 스타일을 걸어준다. 

});

Vue.component("cont1-el",{
    data : () => {
        return {
            movieList : [
                {img:"cont_01.png", title:"죄 많은 소녀 (After My Death, 2019)"},
                {img:"cont_02.jpeg", title:"소공녀 (Microhabitat, 2020)"},
                {img:"cont_03.jpg", title:"벌새 (House of Hummingbird, 2018)"},
            ]
        }
    },
    template : `
    <div id="movie">
        <div class="wrap">
            <h2>Today's Movie</h2>
            <div class="content">
                <div class="box" v-for="list in movieList">
                    <div class="movie_item" :style="'background-image: url(./img/'+list.img+')'">
                        <img src="./img/play_icon.png" alt="">
                    </div>
                    <h3>{{list.title}}</h3>
                </div>
            </div>
        </div>
    </div>
    `
});

Vue.component("bannermid-el",{
    data : () => {
        return {
            title : "Audition Schedule",
            txt1 : "실시간으로 업데이트 되는 오디션 정보를 확인하실 수 있습니다.",
            txt2: "배우 또는 배우 지망생분들의 많은 참여 바랍니다.",
            btn: "오디션 정보 확인"
        }
    },
    template : `
    <div id="bannerMid">
        <div class="wrap">
            <h3>{{title}}</h3>
            <p>{{txt1}}</p>
            <p>{{txt2}}</p>
            <a href="#">{{btn}}</a>
        </div>
    </div>
    `
});

Vue.component("cont2-el",{
    data : () => {
        return {
            cont2List : [
                {img: "yeobeen.png", actor:"전여빈", link:"필모그래피"},
                {img: "saebyeok.png", actor:"김새벽", link:"필모그래피"},
                {img: "sanghee.png", actor:"이상희", link:"필모그래피"},
                {img: "yeeun.png", actor:"김예은", link:"필모그래피"},
                {img: "hakju.png", actor:"이학주", link:"필모그래피"},
                {img: "jungmin.png", actor:"박정민", link:"필모그래피"},
            ]
        }
    },
    template : `
    <div id="cont2">
        <div class="wrap">
            <div class="title">
                <h3>Actor</h3>
            </div>
            <div class="cont">
                <div class="box"  v-for="i in cont2List" :style="'background-image: url(./img/'+i.img+')'">
                    <div class="txt">
                        <p>{{i.actor}}</p>
                        <a href="#">{{i.link}}</a>
                    </div>
                </div>
                <button class="btn2">더보기</button>
            </div>
        </div>
    </div>
    `
});

Vue.component("review-el",{
    data : () =>{
        return {
            reviewList : [
                {img: "review1.jpg", review:"1차 오디션 합격 후, 감독님과의 직접 오디션을 보는 소중한 기회를 얻게 되었습니다. 감독님께서 제시하신 키워드에 맞게 준비한 연기를 보여드렸습니다. 연기가 끝나고 감독님께서는 호흡, 발음, 발성, 집중력 등 다각도에서 꼼꼼한 평을 해주셨습니다. 연기뿐만 아니라 프로필 사진에 대해서도 조언을 해주셨고, 제가 미처 생각하지 못했던 부분을 짚어주셔서 큰 도움을 받게 되었습니다.", name:"김주영"},
                {img: "review2.jpg", review:"오디션장에 들어가서 간단하게 자기소개를 하고 프로필에 나와있는 것들로 간단히 대화를 한 뒤 독백을 했습니다. 그 후 감독님이 얘기해주신 몇가지 상황들로 즉흥연기를 하고 작품의 내용을 간단히 듣고 마쳤습니다. 딱딱한 오디션이 아닌 대화하면서 긴장도 풀어주시고 편한 분위기의 오디션장이었습니다. 감사합니다.", name:"박수연"},
                {img: "review3.jpg", review:"필름메이커스에서 독립영화, 상업영화 등의 정보들과 직접적인 오디션을 볼 수 있는 연결 등이 특별하게 느껴지는 이 곳에 이제 가입한지 1주일 밖에 안 되었음에도 오디션을 볼 좋은 기회가 주어졌습니다. 오디션 영상을 찍으며 연기 외적으로도 고민 할 수 있게 되었습니다. ", name:"이영수"},
            ]
        }
    },
    template : `
    <div id="review">
        <div class="wrap">
            <div class="title">
                <h3>Audition Reviewes</h3>
            </div>
            <div id="slider">
                <div class="slide_frame01">
                    <div class="cont" v-for="list in reviewList">
                        <p>{{list.review}}</p>
                        <div class="img" :style="'background-image: url(./img/'+list.img+')'"></div>
                        <h4 class="name">{{list.name}}</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
});


Vue.component("footer-el",{
    data : () =>{
        return {
            footerTop : ["이용약관","개인정보 취급방침","고객상담실"],
            footerLeft : ["Filmmakers","대표 : 임지애","사업자등록번호 : 113-28-507","주소 : 서울특별시 강남구 논현로","개인정보관리책임자 : 한상용","© 1999 - 2022 Filmmakers"],
            footerRight : ["고객센터(이용 및 결제 문의) 제휴 및 대외 협력, 광고 문의","대표전화 : 02-1234-5678","카카오톡 플러스친구 : 필름메이커스","이메일 : info@filmmakers.com"]
        }
    },
    template : `
    <div id="footer">
        <div class="wrap">
            <div class="top">
                <ul>
                    <li v-for="list in footerTop"><a href="#">{{list}}</a></li>
                </ul>
            </div>
            <div class="bottom">
                <div class="left">
                    <ul>
                        <li v-for="list in footerLeft">{{list}}</li>
                    </ul>
                </div>
                <div class="right">
                    <ul>
                        <li v-for="list in footerRight">{{list}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    `
});



new Vue({
    el : "#app"
});



// jqeury 영역 (가동시점은 구조 완성 후)
$(document).ready(function(){
    $("#slider .slide_frame").slick({
        infinite: true,
        fade : true,
        autoplay:true,
        cssEase : "linear"
    });
    $("#slider .slide_frame01").slick({
        infinite: true,
        fade : true,
        autoplay:true,
        cssEase : "linear",
        dots: true,
    });
});
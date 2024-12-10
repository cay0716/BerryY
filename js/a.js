

document.addEventListener('DOMContentLoaded', () => {
    //  index
    const ANIMATION_KEY = 'animation-executed-timestamp';
    const COOLDOWN_TIME =  4 * 60 * 1000;
    const elementsToAnimate = document.querySelectorAll('.a');
    const berryBox = document.querySelector('.index .berry_box');
    
    const lastExecutedTime = localStorage.getItem(ANIMATION_KEY);
    const now = Date.now();

    if (!lastExecutedTime || now - lastExecutedTime > COOLDOWN_TIME) {
        // 애니메이션을 실행
        elementsToAnimate.forEach((element) => {
            element.classList.remove('animate');
            void element.offsetWidth; // reflow를 발생시켜 애니메이션을 재시작하게 함
            element.classList.add('animate');
        });

        document.querySelector('.logo_full').style.opacity = '0';
        berryBox.style.transform = 'translateY(410px) scale(1.2)';
        document.querySelector('.index .menu_box').style.opacity = 0;

        // 현재 시간을 기록 (5분 후에 다시 실행 가능)
        localStorage.setItem(ANIMATION_KEY, now);
    } else {
        document.querySelector('.logo_full').style.opacity = '1';
        berryBox.style.transform = 'translateY(100px) scale(1)';
        document.querySelector('.index .menu_box').style.opacity = 1;
    }
});document.addEventListener('DOMContentLoaded', () => {
// ============ 1.baby
    const pack = document.querySelector('.container.baby .pack');
    const pack_top = document.querySelector('.pack .box.top');
    const pack_s = document.querySelector('.pack .img_box img:nth-child(2)');

    pack.addEventListener('click', () => {
        pack.classList.toggle('rotate');
        pack_top.classList.toggle('rotate');
        pack_s.classList.toggle('active');
    })
    
});


document.addEventListener("DOMContentLoaded", () => {
    // 아기
    const rangeInput = document.querySelector('.child_input');
    const child = document.querySelector('#child');
    const armL = document.querySelector('.menu2_arm_left');
    const armR = document.querySelector('.menu2_arm_right');
    const legL = document.querySelector('.menu2_leg_left');
    const legR = document.querySelector('.menu2_leg_right');
    


    rangeInput.addEventListener('input', () => {
        const step = parseInt(rangeInput.value, 10);

        document.querySelector('.menu2_mouse2').classList.remove('step1');
        document.querySelector('.menu2_baby1').classList.remove('step1');
        document.querySelector('.menu2_baby2').classList.remove('step1');
        child.classList.remove('step2');
        document.querySelector('.menu2_car').classList.remove('step2');
        document.querySelector('.menu2_b1').classList.remove('step2');
        document.querySelector('.menu2_b2').classList.remove('step2');
        document.querySelector('.menu2_b3').classList.remove('step2');
        child.classList.remove('step3');
        armL.classList.remove('step2');
        armR.classList.remove('step2');
        armL.classList.remove('step3');
        armR.classList.remove('step3');
        legL.classList.remove('step3');
        legR.classList.remove('step3');
        document.querySelector('.menu2_crayon').classList.remove('step3');
        document.querySelector('.menu2_doll').classList.remove('step3');

        if(step === 1) {
            child.classList.add('step1');
            document.querySelector('.menu2_mouse2').classList.add('step1');
            document.querySelector('.menu2_baby1').classList.add('step1');
            document.querySelector('.menu2_baby2').classList.add('step1');

        } else if(step === 2) {
            child.classList.add('step2');
            armL.classList.add('step2');
            armR.classList.add('step2');
            document.querySelector('.menu2_car').classList.add('step2');
            document.querySelector('.menu2_b1').classList.add('step2');
            document.querySelector('.menu2_b2').classList.add('step2');
            document.querySelector('.menu2_b3').classList.add('step2');
        } else if(step === 3) {
            child.classList.add('step3');
            armL.classList.add('step3');
            armR.classList.add('step3');
            legL.classList.add('step3');
            legR.classList.add('step3');
            document.querySelector('.menu2_crayon').classList.add('step3');
            document.querySelector('.menu2_doll').classList.add('step3');
        }
    })
})
document.addEventListener('DOMContentLoaded', () => {
// =========== 3. kind
    let cards = document.querySelectorAll('.container.kind .card');

    console.log(cards); // 디버깅용 로그
    cards.forEach(card => {
        card.addEventListener('click', () =>{
            console.log(card); // 디버깅용 로그
            card.classList.toggle('active');
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    // 초등학생
    const moves = document.querySelectorAll('img.move');
    const stopBtn = document.querySelector('.elem .stop')
    const restartBtn = document.querySelector('.elem .restart')
    
    
    stopBtn.addEventListener('click', () => {
        moves.forEach(move => {
            move.style.animationPlayState = 'paused'
        })
    })
    
    restartBtn.addEventListener('click', () => {
        moves.forEach(move => {
            move.style.animationPlayState = 'running'
        })
    })
});
document.addEventListener("DOMContentLoaded", () => {
    // ===== 4. 고등학생
    let clickCount = 0;

    document.querySelector('.shutter').addEventListener('click', function() {
        let polas = document.querySelectorAll('.pola');

        clickCount++;
    
        polas.forEach(pola => {
            pola.style.opacity = 0; 
            pola.style.animation = 'none'; 

            pola.addEventListener('click', () => {
                pola.style.opacity = 0;
            })
        });
    
        let index = clickCount % polas.length; // 순차적으로 반복
    
        polas[index].style.opacity = 1; 
        polas[index].style.animation = 'pola_animation 1.5s forwards';
    });
})

document.addEventListener("DOMContentLoaded", () => {
    const talkBtn = document.querySelector('.btn.talk');
    const smileBtn = document.querySelector('.btn.smile');
    const berry = document.querySelector('#now');
    const berryFace = document.querySelector('#now .menu9_face2');
    
    const colors = ['#FFD9DF', '#FFC7CF', '#FFA9B5', '#FF8597', '#FF526B'];
    let colorIndex = 0;
    
    // btn.talk 클릭 시 SVG 색상 변경
    talkBtn.addEventListener('click', () => {
      colorIndex = (colorIndex + 1) % colors.length; 
      berryFace.style.fill = colors[colorIndex];
    });
    
    // btn.smile 클릭 시 SVG 크기 축소
    let scaleValue = 1;
    smileBtn.addEventListener('click', () => {
      scaleValue = Math.max(scaleValue - 0.1, 0.5); 
      berry.style.transform = `scale(${scaleValue}) translate(-50%, -50%)`; 
    });
})
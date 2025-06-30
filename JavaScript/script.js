document.addEventListener('DOMContentLoaded', () => {

        // 全ての .faq 要素を取得
        const faqs = document.querySelectorAll('.faq');

    // 基本動作確認用

    // faqs.forEach((faq) => {
    //     faqs.addEventListener("click", () => {
    //         faqs.classList.toggle("active");
    //     });
    // });

    
        faqs.forEach((faq, index) => {
            const questionDt = faq.querySelector('.question');
            const iconImg = questionDt.querySelector('img');
            const answerDd = faq.querySelector('.answer');
    
            // --- 初期状態の設定 ---
            if (index === 0) {
                faq.classList.add('active');
                iconImg.src = './assets/images/icon-minus.svg';
                iconImg.alt = 'マイナス記号';
                questionDt.setAttribute('aria-expanded', 'true');
            } else {
                faq.classList.remove('active');
                iconImg.src = './assets/images/icon-plus.svg';
                iconImg.alt = 'プラス記号';
                questionDt.setAttribute('aria-expanded', 'false');
            }
    
            // --- クリックイベントリスナー ---
            questionDt.addEventListener('click', () => {
                const isActive = faq.classList.contains('active'); // クリック前の状態をチェック
    
                // まず、既存のアニメーションクラスを全て削除
                iconImg.classList.remove('rotate-in', 'rotate-out');
    
                // 'active' クラスをトグル
                faq.classList.toggle('active');
    
                // 'active' クラスの新しい状態に基づいてアニメーションとアイコンを更新
                if (faq.classList.contains('active')) {
                    // 開く場合
                    iconImg.src = './assets/images/icon-minus.svg';
                    iconImg.alt = 'マイナス記号';
                    questionDt.setAttribute('aria-expanded', 'true');
                    iconImg.classList.add('rotate-in'); // 開くアニメーションを適用
                } else {
                    // 閉じる場合
                    iconImg.src = './assets/images/icon-plus.svg';
                    iconImg.alt = 'プラス記号';
                    questionDt.setAttribute('aria-expanded', 'false');
                    iconImg.classList.add('rotate-out'); // 閉じるアニメーションを適用
                }
    
                // アニメーション終了後にアニメーションクラスを削除し、次回のクリックに備える
                // アニメーションの時間（0.5秒）に合わせてsetTimeoutを設定
                setTimeout(() => {
                    iconImg.classList.remove('rotate-in', 'rotate-out');
                }, 500); // CSSアニメーションの時間と同じミリ秒を指定
            });
        });
    });
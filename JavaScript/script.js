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
        // この変数は現在のロジックでは直接使っていないが、要素の取得として残しておく。
        const answerDd = faq.querySelector('.answer');

        // 初期状態の設定
        if (index === 0) {
            // 最初のFAQ項目は開いた状態にする
            faq.classList.add('active'); // active クラスを追加
            iconImg.src = './assets/images/icon-minus.svg'; // アイコンをマイナスに
            iconImg.alt = 'マイナス記号'; // alt テキストを更新
            questionDt.setAttribute('aria-expanded', 'true'); // aria-expanded を true に
        } else {
            // 2番目以降のFAQ項目は閉じた状態にする
            faq.classList.remove('active'); // 念のため active クラスを削除
            iconImg.src = './assets/images/icon-plus.svg'; // アイコンをプラスに
            iconImg.alt = 'プラス記号'; // alt テキストを更新
            questionDt.setAttribute('aria-expanded', 'false'); // aria-expanded を false に
        }

        // クリックイベントリスナー
        questionDt.addEventListener('click', () => {
            // faq 要素に 'active' クラスをトグル
            faq.classList.toggle('active');

            // 'active' クラスの状態に基づいてアイコンとaria-expandedを更新
            // このif-elseブロックが、全てのFAQ項目でアイコンを切り替える役割を担っています。
            if (faq.classList.contains('active')) {
                // 'active' クラスがある場合（開いている状態）
                iconImg.src = './assets/images/icon-minus.svg';
                iconImg.alt = 'マイナス記号';
                questionDt.setAttribute('aria-expanded', 'true');
            } else {
                // 'active' クラスがない場合（閉じている状態）
                iconImg.src = './assets/images/icon-plus.svg';
                iconImg.alt = 'プラス記号';
                questionDt.setAttribute('aria-expanded', 'false');
            }
        });
    });
});
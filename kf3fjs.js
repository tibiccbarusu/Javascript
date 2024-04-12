"use strict"

function lastDay(x) {
    const id = document.getElementById(x);
    const day = "2024/04/12/12:38";
    id.innerHTML = day;
}

function photoData(x,n,k) {
    const id = document.getElementById(x);
    const photoDataList = new Array();
    //errorType 0→正常,1→注意,2→重大,3→未所持のため不明
    //星1
    photoDataList[1001] = {"name" : "シビレ（フォト）", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/842206\">p1001</a>"};
    photoDataList[1002] = {"name" : "ファングセル（フォト）", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/842208\">p1002</a>"};
    photoDataList[1003] = {"name" : "ゾウリムシ（フォト）", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/842217\">p1003</a>"};
    photoDataList[1004] = {"name" : "ミカヅキ（フォト）", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/842218\">p1004</a>"};
    photoDataList[1005] = {"name" : "ボルボックス（フォト）", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/842219\">p1005</a>"};
    photoDataList[1006] = {"name" : "ティルセル（フォト）", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/842220\">p1006</a>"};
    photoDataList[1007] = {"name" : "トゲ（フォト）", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/842221\">p1007</a>"};
    //星2
    photoDataList[2001] = {"name" : "お気に入りの木陰", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/132180\">p2001</a>"};
    photoDataList[2002] = {"name" : "だいじなメガネ", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/132182\">p2002</a>"};
    photoDataList[2003] = {"name" : "パークスタッフ証", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/132185\">p2003</a>"};
    photoDataList[2004] = {"name" : "私たちのレッスン場！", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/132192\">p2004</a>"};
    photoDataList[2005] = {"name" : "カフェタイム", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/132392\">p2005</a>"};
    photoDataList[2006] = {"name" : "スタッフカー3号車", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/132400\">p2006</a>"};
    photoDataList[2007] = {"name" : "スタッフパス", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/132409\">p2007</a>"};
    photoDataList[2008] = {"name" : "飼育員更衣室", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/132410\">p2008</a>"};
    photoDataList[2009] = {"name" : "4番バッター・ヒグマ", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/132423\">p2009</a>"};
    photoDataList[2010] = {"name" : "つーん", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/132431\">p2010</a>"};
    photoDataList[2011] = {"name" : "とびだし注意！", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/133328\">p2011</a>"};
    photoDataList[2012] = {"name" : "ガイドマップ", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/133423\">p2012</a>"};
    photoDataList[2013] = {"name" : "探検隊日誌", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/133428\">p2013</a>"};
    photoDataList[2014] = {"name" : "アンイン港フェリーターミナル", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/133433\">p2014</a>"};
    photoDataList[2015] = {"name" : "サンプル採取", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/133434\">p2015</a>"};
    photoDataList[2016] = {"name" : "ジャパまんスチーマー", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/133435\">p2016</a>"};
    photoDataList[2017] = {"name" : "ラッキービースト準備中！", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/133436\">p2017</a>"};
    photoDataList[2018] = {"name" : "水浴びターイム！", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/133437\">p2018</a>"};
    photoDataList[2019] = {"name" : "うしろうしろ！", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/133438\">p2019</a>"};
    photoDataList[2020] = {"name" : "ごろごろ", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/133440\">p2020</a>"};
    photoDataList[2021] = {"name" : "ただたいたたすたき", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/133442\">p2021</a>"};
    photoDataList[2022] = {"name" : "えんぶ！", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/133443\">p2022</a>"};
    photoDataList[2023] = {"name" : "先生！お願いします", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/133445\">p2023</a>"};
    //星3
    photoDataList[3001] = {"name" : "おーぷんかーなのだ！", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/125198\">p3001</a>"};
    photoDataList[3002] = {"name" : "あなたはだぁれ？", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/126134\">p3002</a>"};
    photoDataList[3003] = {"name" : "ちゃんとみてね！", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/126137\">p3003</a>"};
    photoDataList[3004] = {"name" : "はじめてのフォト！", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/126147\">p3004</a>"};
    photoDataList[3005] = {"name" : "ジャスティスなふたり", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/126151\">p3005</a>"};
    photoDataList[3006] = {"name" : "みらいよち", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/126153\">p3006</a>"};
    photoDataList[3007] = {"name" : "つわものを求めて", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/127468\">p3007</a>"};
    photoDataList[3008] = {"name" : "ジャパリ団参上！", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/129645\">p3008</a>"};
    photoDataList[3009] = {"name" : "こういうものだ！", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/130780\">p3009</a>"};
    photoDataList[3010] = {"name" : "おいしい差し入れ", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/131700\">p3010</a>"};
    photoDataList[3011] = {"name" : "どっちに行こうかな", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/131704\">p3011</a>"};
    photoDataList[3012] = {"name" : "い、いかくのポーズっ！", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/131710\">p3012</a>"};
    photoDataList[3013] = {"name" : "いっしょにパオパオ", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/131753\">p3013</a>"};
    photoDataList[3014] = {"name" : "タマゴのみちびき", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/131760\">p3014</a>"};
    photoDataList[3015] = {"name" : "ジャキーン！", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/131977\">p3015</a>"};
    photoDataList[3016] = {"name" : "旅人よ", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/131979\">p3016</a>"};
    photoDataList[3017] = {"name" : "着せ替えごっこ", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/131980\">p3017</a>"};
    photoDataList[3018] = {"name" : "酸っぱいぶどう", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/132047\">p3018</a>"};
    photoDataList[3019] = {"name" : "にらめっこ", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/132052\">p3019</a>"};
    photoDataList[3020] = {"name" : "みんなでGO！", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/132054\">p3020</a>"};
    photoDataList[3021] = {"name" : "お料理教室", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/132225\">p3021</a>"};
    photoDataList[3022] = {"name" : "悪と反逆の使徒！", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/132227\">p3022</a>"};
    photoDataList[3023] = {"name" : "読書タイム", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/132228\">p3023</a>"};
    photoDataList[3024] = {"name" : "しあわせいっぱい", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/132349\">p3024</a>"};
    photoDataList[3025] = {"name" : "大ジャンプ", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/132351\">p3025</a>"};
    photoDataList[3026] = {"name" : "マーチ！", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/132353\">p3026</a>"};
    photoDataList[3027] = {"name" : "ぷろのどうぐ", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/132354\">p3027</a>"};
    photoDataList[3028] = {"name" : "ゆきやコンコン", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/132356\">p3028</a>"};
    photoDataList[3029] = {"name" : "わたしひとりで作れるよ！", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/132366\">p3029</a>"};
    photoDataList[3030] = {"name" : "Good night", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/132373\">p3030</a>"};
    photoDataList[3031] = {"name" : "あたらしい仲間", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/132375\">p3031</a>"};
    photoDataList[3032] = {"name" : "オーダー！", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/133449\">p3032</a>"};
    photoDataList[3033] = {"name" : "レッスン！レッスン！", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/134946\">p3033</a>"};
    photoDataList[3034] = {"name" : "ふたりでお出かけ", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/141166\">p3034</a>"};
    photoDataList[3035] = {"name" : "スイーツ？スイーツ！", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/147620\">p3035</a>"};
    photoDataList[3036] = {"name" : "突入作戦！", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/154693\">p3036</a>"};
    photoDataList[3037] = {"name" : "正義の味方", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/157887\">p3037</a>"};
    photoDataList[3038] = {"name" : "わたしのできること", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/160160\">p3038</a>"};
    photoDataList[3039] = {"name" : "Rockin‘time", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/162528\">p3039</a>"};
    photoDataList[3040] = {"name" : "砂漠のキャンバス", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/168209\">p3040</a>"};
    photoDataList[3041] = {"name" : "ぬくぬく湯上り", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/172926\">p3041</a>"};
    photoDataList[3042] = {"name" : "オーシャン・カフェ", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/175394\">p3042</a>"};
    photoDataList[3043] = {"name" : "約束", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/180766\">p3043</a>"};
    photoDataList[3044] = {"name" : "パッカーン！チャレンジ", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/181637\">p3044</a>"};
    photoDataList[3045] = {"name" : "収穫の秋！", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/189494\">p3045</a>"};
    photoDataList[3046] = {"name" : "Trick or Treat!", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/193097\">p3046</a>"};
    photoDataList[3047] = {"name" : "Dear my friends", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/200941\">p3047</a>"};
    photoDataList[3048] = {"name" : "じーっと観察中", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/203212\">p3048</a>"};
    photoDataList[3049] = {"name" : "新春羽根突き対決！", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/212063\">p3049</a>"};
    photoDataList[3050] = {"name" : "オシャレ度アップ", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/219892\">p3050</a>"};
    photoDataList[3051] = {"name" : "一閃", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/229177\">p3051</a>"};
    photoDataList[3052] = {"name" : "とっておきの一杯", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/236501\">p3052</a>"};
    photoDataList[3053] = {"name" : "ジャパリパーク着任の日", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/238326\">p3053</a>"};
    photoDataList[3054] = {"name" : "おはなみびより", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/242072\">p3054</a>"};
    photoDataList[3055] = {"name" : "おんせんごっこ", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/251514\">p3055</a>"};
    photoDataList[3056] = {"name" : "ジャパリミュージアム", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/256702\">p3056</a>"};
    photoDataList[3057] = {"name" : "やみよのおとずれ", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/264681\">p3057</a>"};
    photoDataList[3058] = {"name" : "いたずらバブルリング", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/267747\">p3058</a>"};
    photoDataList[3059] = {"name" : "ひなたでぬくぬく", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/276828\">p3059</a>"};
    photoDataList[3060] = {"name" : "おひるのサイレン", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/283128\">p3060</a>"};
    photoDataList[3061] = {"name" : "踊り合いっこ", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/283906\">p3061</a>"};
    photoDataList[3062] = {"name" : "やるときはやるよ", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/288517\">p3062</a>"};
    photoDataList[3063] = {"name" : "うれしはずかし", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/290955\">p3063</a>"};
    photoDataList[3064] = {"name" : "キョウシュチホーにて", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/293956\">p3064</a>"};
    photoDataList[3065] = {"name" : "ハロウィン・サプライズ！", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/296744\">p3065</a>"};
    photoDataList[3066] = {"name" : "秘・湯めぐり！", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/303775\">p3066</a>"};
    photoDataList[3067] = {"name" : "おそろいなのだ！", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/306959\">p3067</a>"};
    photoDataList[3068] = {"name" : "ねらいをさだめて", "errorType" : 3, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/318298\">p3068</a>"};
    photoDataList[3069] = {"name" : "チョコレート・トラップ", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/327708\">p3069</a>"};
    photoDataList[3070] = {"name" : "ぶゆうでん！", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/332657\">p3070</a>"};
    photoDataList[3071] = {"name" : "パンキッシュ・ビート", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/334726\">p3071</a>"};
    photoDataList[3072] = {"name" : "すてっぷあっぷ・アドベンチャー", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/341185\">p3072</a>"};
    photoDataList[3073] = {"name" : "ジャパリラインの夜", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/341321\">p3073</a>"};
    photoDataList[3074] = {"name" : "たぎってきた！", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/342741\">p3074</a>"};
    photoDataList[3075] = {"name" : "とりーとめんと？", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/349350\">p3075</a>"};
    photoDataList[3076] = {"name" : "なつかしのお味", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/354406\">p3076</a>"};
    photoDataList[3077] = {"name" : "なんでやねん！", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/357551\">p3077</a>"};
    photoDataList[3078] = {"name" : "ただいま", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/366163\">p3078</a>"};
    photoDataList[3079] = {"name" : "ひとやすみですぅ", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/370419\">p3079</a>"};
    photoDataList[3080] = {"name" : "いっしょにもぐもぐ", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/378167\">p3080</a>"};
    photoDataList[3081] = {"name" : "かげあそび", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/382983\">p3081</a>"};
    photoDataList[3082] = {"name" : "めぐりゆく時のなかで", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/388762\">p3082</a>"};
    photoDataList[3083] = {"name" : "まじウマ団子", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/394240\">p3083</a>"};
    photoDataList[3084] = {"name" : "はっぴー・さぷらいずパーティー！", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/396580\">p3084</a>"};
    photoDataList[3085] = {"name" : "たんけんたいのお家調査！", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/397081\">p3085</a>"};
    photoDataList[3086] = {"name" : "お届けの準備です～♪", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/478665\">p3086</a>"};
    photoDataList[3087] = {"name" : "ゆきだまごろごろ", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/545866\">p3087</a>"};
    photoDataList[3088] = {"name" : "ぜったいに勝ーーつ！", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/588945\">p3088</a>"};
    photoDataList[3089] = {"name" : "愛しいけものたち", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/629758\">p3089</a>"};
    photoDataList[3090] = {"name" : "ぴょんと年越し", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/630636\">p3090</a>"};
    photoDataList[3091] = {"name" : "スイート・チャレンジ", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/637732\">p3091</a>"};
    photoDataList[3092] = {"name" : "私が守る", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/685535\">p3092</a>"};
    photoDataList[3093] = {"name" : "ラッキー・デコレーション！", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/685537\">p3093</a>"};
    photoDataList[3094] = {"name" : "せいくらべ", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/726527\">p3094</a>"};
    photoDataList[3095] = {"name" : "ゆったり、の～んびり", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/758253\">p3095</a>"};
    photoDataList[3096] = {"name" : "ふしぎなうた", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/766339\">p3096</a>"};
    photoDataList[3097] = {"name" : "サマーリフレッシュ", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/774123\">p3097</a>"};
    photoDataList[3098] = {"name" : "暑いねぇ～", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/777501\">p3098</a>"};
    photoDataList[3099] = {"name" : "なでなでご利益♪", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/785685\">p3099</a>"};
    photoDataList[3100] = {"name" : "あったかぽかぽか", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/792634\">p3100</a>"};
    photoDataList[3101] = {"name" : "やっと会えたね", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/792644\">p3101</a>"};
    photoDataList[3102] = {"name" : "やさしくお手入れ", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/795412\">p3102</a>"};
    photoDataList[3103] = {"name" : "覇者の反撃", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/800977\">p3103</a>"};
    photoDataList[3104] = {"name" : "これからも、たくさん", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/806427\">p3104</a>"};
    photoDataList[3105] = {"name" : "ひんやり雪隠れ♪", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/812131\">p3105</a>"};
    photoDataList[3106] = {"name" : "川のせせらぎ", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/818010\">p3106</a>"};
    photoDataList[3107] = {"name" : "はじまりのおと", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/818024\">p3107</a>"};
    photoDataList[3108] = {"name" : "福よこいこい！", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/818557\">p3108</a>"};
    photoDataList[3109] = {"name" : "ぶら～ん？", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/824130\">p3109</a>"};
    photoDataList[3110] = {"name" : "わたしのきたえたワザ！", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/827129\">p3110</a>"};
    photoDataList[3111] = {"name" : "サービスです♡", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/836554\">p3111</a>"};
    photoDataList[3112] = {"name" : "パークの春いちばん！", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/836560\">p3112</a>"};
    photoDataList[3113] = {"name" : "サラダパーティー！", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/842426\">p3113</a>"};
    photoDataList[3114] = {"name" : "せーので うー、がおー！", "errorType" : 2, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/210103\">p3114</a>"};
    photoDataList[3115] = {"name" : "おれたちは！", "errorType" : 2, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/258879\">p3115</a>"};
    photoDataList[3116] = {"name" : "はっぴーたいがーいやー！", "errorType" : 2, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/318893\">p3116</a>"};
    //星4
    photoDataList[4001] = {"name" : "モコモコチョコケーキ", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/125193\">p4001</a>"};
    photoDataList[4002] = {"name" : "本には知識がたくさんです", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/125197\">p4002</a>"};
    photoDataList[4003] = {"name" : "今日の宿題は2倍ですわ！", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/126125\">p4003</a>"};
    photoDataList[4004] = {"name" : "みゃみゃみゃミラクル！", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/126127\">p4004</a>"};
    photoDataList[4005] = {"name" : "おひるね仲間", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/127466\">p4005</a>"};
    photoDataList[4006] = {"name" : "りーどあぶっく", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/129652\">p4006</a>"};
    photoDataList[4007] = {"name" : "隊長さーん！", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/130556\">p4007</a>"};
    photoDataList[4008] = {"name" : "サイキョーだからね～", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/130557\">p4008</a>"};
    photoDataList[4009] = {"name" : "大海を往く", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/130558\">p4009</a>"};
    photoDataList[4010] = {"name" : "ふぃにっしゅ", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/130559\">p4010</a>"};
    photoDataList[4011] = {"name" : "ねこぱんち", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/130564\">p4011</a>"};
    photoDataList[4012] = {"name" : "カリスマ美容師アルパカ・スリ", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/130572\">p4012</a>"};
    photoDataList[4013] = {"name" : "蛇の王", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/130996\">p4013</a>"};
    photoDataList[4014] = {"name" : "よるに花咲く", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/131000\">p4014</a>"};
    photoDataList[4015] = {"name" : "はりこみっ", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/131005\">p4015</a>"};
    photoDataList[4016] = {"name" : "マイルカの楽園", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/131047\">p4016</a>"};
    photoDataList[4017] = {"name" : "いっしょにたべよう", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/131701\">p4017</a>"};
    photoDataList[4018] = {"name" : "はなまるだね！", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/131751\">p4018</a>"};
    photoDataList[4019] = {"name" : "参ります！", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/131950\">p4019</a>"};
    photoDataList[4020] = {"name" : "よいこへ届け", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/132173\">p4020</a>"};
    photoDataList[4021] = {"name" : "いんたーみっしょん", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/132175\">p4021</a>"};
    photoDataList[4022] = {"name" : "これがオレの！", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/132176\">p4022</a>"};
    photoDataList[4023] = {"name" : "しあわせのうたごえ", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/132317\">p4023</a>"};
    photoDataList[4024] = {"name" : "にゅーいやー！", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/132326\">p4024</a>"};
    photoDataList[4025] = {"name" : "晴れ姿", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/132327\">p4025</a>"};
    photoDataList[4026] = {"name" : "がぶっとお仕置き", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/134942\">p4026</a>"};
    photoDataList[4027] = {"name" : "てさぐりニュースタイル", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/141164\">p4027</a>"};
    photoDataList[4028] = {"name" : "試作品プラモ type-SC", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/141167\">p4028</a>"};
    photoDataList[4029] = {"name" : "本気のきーっく", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/147619\">p4029</a>"};
    photoDataList[4030] = {"name" : "かけっこインターバル", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/154706\">p4030</a>"};
    photoDataList[4031] = {"name" : "参謀の秘術！", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/154745\">p4031</a>"};
    photoDataList[4032] = {"name" : "一点集中サーベルピック", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/160159\">p4032</a>"};
    photoDataList[4033] = {"name" : "誇りを手に！！！", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/162526\">p4033</a>"};
    photoDataList[4034] = {"name" : "お水をどうぞ～♪", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/164303\">p4034</a>"};
    photoDataList[4035] = {"name" : "天かける想い", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/168207\">p4035</a>"};
    photoDataList[4036] = {"name" : "ホワイトハンティング", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/170089\">p4036</a>"};
    photoDataList[4037] = {"name" : "しっぴつかつどう", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/172866\">p4037</a>"};
    photoDataList[4038] = {"name" : "ニャギっとハイ！ポーズ", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/175391\">p4038</a>"};
    photoDataList[4039] = {"name" : "ごほうびウィップ♪", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/177721\">p4039</a>"};
    photoDataList[4040] = {"name" : "わんだふる！", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/181640\">p4040</a>"};
    photoDataList[4041] = {"name" : "オフショット", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/183376\">p4041</a>"};
    photoDataList[4042] = {"name" : "ヤバヤバやたいフード", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/186085\">p4042</a>"};
    photoDataList[4043] = {"name" : "Welcome to ようこそ！", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/188421\">p4043</a>"};
    photoDataList[4044] = {"name" : "こっちにおいで", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/189489\">p4044</a>"};
    photoDataList[4045] = {"name" : "すべては一瞬に", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/193085\">p4045</a>"};
    photoDataList[4046] = {"name" : "お手のモノっ！", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/194951\">p4046</a>"};
    photoDataList[4047] = {"name" : "紅葉狩", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/201568\">p4047</a>"};
    photoDataList[4048] = {"name" : "秘境の花園", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/203209\">p4048</a>"};
    photoDataList[4049] = {"name" : "おっお宝だーっ！", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/204467\">p4049</a>"};
    photoDataList[4050] = {"name" : "聖なる夜のおくりもの", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/207309\">p4050</a>"};
    photoDataList[4051] = {"name" : "だいすきなぬいぐるみ", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/210083\">p4051</a>"};
    photoDataList[4052] = {"name" : "できたてをどうぞ！", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/212062\">p4052</a>"};
    photoDataList[4053] = {"name" : "こころほかほか", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/213801\">p4053</a>"};
    photoDataList[4054] = {"name" : "ちょっとはいしゃく！", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/217601\">p4054</a>"};
    photoDataList[4055] = {"name" : "りらくぜーしょん", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/219886\">p4055</a>"};
    photoDataList[4056] = {"name" : "ゆきやまコンサート", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/222728\">p4056</a>"};
    photoDataList[4057] = {"name" : "ときいろに染まる空", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/228763\">p4057</a>"};
    photoDataList[4058] = {"name" : "ごくさいしき", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/229169\">p4058</a>"};
    photoDataList[4059] = {"name" : "ぬへー", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/236496\">p4059</a>"};
    photoDataList[4060] = {"name" : "ぼいすとれーにんぐ", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/239697\">p4060</a>"};
    photoDataList[4061] = {"name" : "孤高なる修行", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/242069\">p4061</a>"};
    photoDataList[4062] = {"name" : "チイさなセンセイ", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/244559\">p4062</a>"};
    photoDataList[4063] = {"name" : "応援レッスン！", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/251516\">p4063</a>"};
    photoDataList[4064] = {"name" : "カラフルへんげ", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/252464\">p4064</a>"};
    photoDataList[4065] = {"name" : "全力スプリント", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/256994\">p4065</a>"};
    photoDataList[4066] = {"name" : "あまおとのしらべ", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/258870\">p4066</a>"};
    photoDataList[4067] = {"name" : "JHR・パン食い競争の部", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/260548\">p4067</a>"};
    photoDataList[4068] = {"name" : "スイートタイム", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/263340\">p4068</a>"};
    photoDataList[4069] = {"name" : "完成ですわ！", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/264680\">p4069</a>"};
    photoDataList[4070] = {"name" : "月光のきらめき", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/267746\">p4070</a>"};
    photoDataList[4071] = {"name" : "ふわふわわたあめ", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/270149\">p4071</a>"};
    photoDataList[4072] = {"name" : "なつまつり", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/276833\">p4072</a>"};
    photoDataList[4073] = {"name" : "タマちゃんスマイル！", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/278089\">p4073</a>"};
    photoDataList[4074] = {"name" : "くものうえのけしき", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/282626\">p4074</a>"};
    photoDataList[4075] = {"name" : "ほっぷ、すてっぷ", "errorType" : 3, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/283904\">p4075</a>"};
    photoDataList[4076] = {"name" : "ゆらゆらゆれて", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/285955\">p4076</a>"};
    photoDataList[4077] = {"name" : "ワンツーステップ", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/288514\">p4077</a>"};
    photoDataList[4078] = {"name" : "あなたにあげるわ", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/290954\">p4078</a>"};
    photoDataList[4079] = {"name" : "シマシマ数え隊", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/292435\">p4079</a>"};
    photoDataList[4080] = {"name" : "しょうぶのゆくえ", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/295248\">p4080</a>"};
    photoDataList[4081] = {"name" : "さるすべり", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/296741\">p4081</a>"};
    photoDataList[4082] = {"name" : "吹け吹け天狗風", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/298383\">p4082</a>"};
    photoDataList[4083] = {"name" : "ゆきふるよあけ", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/303774\">p4083</a>"};
    photoDataList[4084] = {"name" : "こたつでみかん", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/305004\">p4084</a>"};
    photoDataList[4085] = {"name" : "ゆきみちさんさく", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/305689\">p4085</a>"};
    photoDataList[4086] = {"name" : "まよなかぴかぴか", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/312487\">p4086</a>"};
    photoDataList[4087] = {"name" : "トップスピード！！", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/318297\">p4087</a>"};
    photoDataList[4088] = {"name" : "見守っていますよ", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/322248\">p4088</a>"};
    photoDataList[4089] = {"name" : "伝統の味", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/325906\">p4089</a>"};
    photoDataList[4090] = {"name" : "ときめきオシャレモード", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/327710\">p4090</a>"};
    photoDataList[4091] = {"name" : "忘れ物は…なかったよね？", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/330384\">p4091</a>"};
    photoDataList[4092] = {"name" : "しんけんしょうぶ", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/332650\">p4092</a>"};
    photoDataList[4093] = {"name" : "ロックロック", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/334725\">p4093</a>"};
    photoDataList[4094] = {"name" : "ぜったいぜつめい！", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/336161\">p4094</a>"};
    photoDataList[4095] = {"name" : "まばたき禁止やで！", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/336707\">p4095</a>"};
    photoDataList[4096] = {"name" : "かくれんぼ", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/342740\">p4096</a>"};
    photoDataList[4097] = {"name" : "すいすいすい〜", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/344313\">p4097</a>"};
    photoDataList[4098] = {"name" : "ざぶざぶごろごろ", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/349349\">p4098</a>"};
    photoDataList[4099] = {"name" : "てんてんハンティング", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/351097\">p4099</a>"};
    photoDataList[4100] = {"name" : "お空にむかって", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/354415\">p4100</a>"};
    photoDataList[4101] = {"name" : "ひかりあつめ", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/355271\">p4101</a>"};
    photoDataList[4102] = {"name" : "応援の歌", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/357550\">p4102</a>"};
    photoDataList[4103] = {"name" : "砂漠の先には", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/359829\">p4103</a>"};
    photoDataList[4104] = {"name" : "さんぽみち", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/362761\">p4104</a>"};
    photoDataList[4105] = {"name" : "しずかな月夜", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/370415\">p4105</a>"};
    photoDataList[4106] = {"name" : "ひっそりまったり", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/372441\">p4106</a>"};
    photoDataList[4107] = {"name" : "ゆったりパーク巡り", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/378166\">p4107</a>"};
    photoDataList[4108] = {"name" : "楽しくダンスダンス♪", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/380360\">p4108</a>"};
    photoDataList[4109] = {"name" : "今夜はサイコー♪", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/382981\">p4109</a>"};
    photoDataList[4110] = {"name" : "どんぐり大きくなーれ！", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/389723\">p4110</a>"};
    photoDataList[4111] = {"name" : "よるの流星", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/394238\">p4111</a>"};
    photoDataList[4112] = {"name" : "見習いとしてっ！", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/395871\">p4112</a>"};
    photoDataList[4113] = {"name" : "お気に入りのごちそう", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/397070\">p4113</a>"};
    photoDataList[4114] = {"name" : "わたしの太鼓、どうですか？", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/414489\">p4114</a>"};
    photoDataList[4115] = {"name" : "メガネのすすめ", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/478663\">p4115</a>"};
    photoDataList[4116] = {"name" : "すぺしゃるコンコンクッキング", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/544125\">p4116</a>"};
    photoDataList[4117] = {"name" : "日頃の相談", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/544128\">p4117</a>"};
    photoDataList[4118] = {"name" : "カフェのひととき", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/545884\">p4118</a>"};
    photoDataList[4119] = {"name" : "ありがとうの花束", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/547179\">p4119</a>"};
    photoDataList[4120] = {"name" : "ゆきのきらきら", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/564032\">p4120</a>"};
    photoDataList[4121] = {"name" : "シロクロつけるのさ！", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/568968\">p4121</a>"};
    photoDataList[4122] = {"name" : "もちもちぺったん", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/588944\">p4122</a>"};
    photoDataList[4123] = {"name" : "おすすめのばしょでち！", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/629756\">p4123</a>"};
    photoDataList[4124] = {"name" : "しろがくろでくろがしろで", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/637726\">p4124</a>"};
    photoDataList[4125] = {"name" : "誰よりも速く！", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/652277\">p4125</a>"};
    photoDataList[4126] = {"name" : "すーぱーしょっと！", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/667220\">p4126</a>"};
    photoDataList[4127] = {"name" : "フルーツみーつけた！", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/685533\">p4127</a>"};
    photoDataList[4128] = {"name" : "みんなを…笑顔に", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/714334\">p4128</a>"};
    photoDataList[4129] = {"name" : "予測不可能", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/726517\">p4129</a>"};
    photoDataList[4130] = {"name" : "レディー・アフター", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/730088\">p4130</a>"};
    photoDataList[4131] = {"name" : "花咲く思い出", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/750104\">p4131</a>"};
    photoDataList[4132] = {"name" : "ゲーム日和", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/758247\">p4132</a>"};
    photoDataList[4133] = {"name" : "どこまでも！", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/760300\">p4133</a>"};
    photoDataList[4134] = {"name" : "その手をにぎって", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/766338\">p4134</a>"};
    photoDataList[4135] = {"name" : "ごろぴか、どどーん！", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/768738\">p4135</a>"};
    photoDataList[4136] = {"name" : "スマイルコミュニケーション", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/772285\">p4136</a>"};
    photoDataList[4137] = {"name" : "ゆらゆらひかる", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/774120\">p4137</a>"};
    photoDataList[4138] = {"name" : "雨と光と", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/776169\">p4138</a>"};
    photoDataList[4139] = {"name" : "わんモア・メロディ♪", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/777486\">p4139</a>"};
    photoDataList[4140] = {"name" : "ちいさな願いごと", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/778585\">p4140</a>"};
    photoDataList[4141] = {"name" : "ひっそり？どっきり！", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/785684\">p4141</a>"};
    photoDataList[4142] = {"name" : "もっと高く！", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/787367\">p4142</a>"};
    photoDataList[4143] = {"name" : "のんほい夕暮れだに", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/792632\">p4143</a>"};
    photoDataList[4144] = {"name" : "わたしたちとあそぼ♡", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/795399\">p4144</a>"};
    photoDataList[4145] = {"name" : "ツイツイ♪負けないだう！", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/795411\">p4145</a>"};
    photoDataList[4146] = {"name" : "今日もあなたと！", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/795900\">p4146</a>"};
    photoDataList[4147] = {"name" : "すてきなにおいに包まれて", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/797006\">p4147</a>"};
    photoDataList[4148] = {"name" : "サバンナのよる", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/798915\">p4148</a>"};
    photoDataList[4149] = {"name" : "みんなでしゅっぱつ♪", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/800491\">p4149</a>"};
    photoDataList[4150] = {"name" : "ポケットの中は…", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/800976\">p4150</a>"};
    photoDataList[4151] = {"name" : "ひょいひょいっとね♪", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/802071\">p4151</a>"};
    photoDataList[4152] = {"name" : "リボンえらび", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/806426\">p4152</a>"};
    photoDataList[4153] = {"name" : "あたしのけっさく！", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/808242\">p4153</a>"};
    photoDataList[4154] = {"name" : "勝ったのは…？", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/812126\">p4154</a>"};
    photoDataList[4155] = {"name" : "うつくしさを映す", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/812135\">p4155</a>"};
    photoDataList[4156] = {"name" : "タケノコみつけました～♪", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/814979\">p4156</a>"};
    photoDataList[4157] = {"name" : "隊長さんお手製の！", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/818008\">p4157</a>"};
    photoDataList[4158] = {"name" : "セカイをもっとカザって", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/818577\">p4158</a>"};
    photoDataList[4159] = {"name" : "しょうがないわね！", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/819966\">p4159</a>"};
    photoDataList[4160] = {"name" : "しずかな朝", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/824116\">p4160</a>"};
    photoDataList[4161] = {"name" : "てやってやっ、ぜんりょく！", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/825697\">p4161</a>"};
    photoDataList[4162] = {"name" : "あそびのちょうせん", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/827128\">p4162</a>"};
    photoDataList[4163] = {"name" : "大きな愛をあなたに", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/827132\">p4163</a>"};
    photoDataList[4164] = {"name" : "れっつぱーんち！", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/836546\">p4164</a>"};
    photoDataList[4165] = {"name" : "とくべつステージだよ！", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/836549\">p4165</a>"};
    photoDataList[4166] = {"name" : "最強のトリは…！？", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/839461\">p4166</a>"};
    photoDataList[4167] = {"name" : "すながくれのヒーロー", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/842424\">p4167</a>"};
    photoDataList[4168] = {"name" : "たまには、ね", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/843366\">p4168</a>"};
    //ワイルドフォト
    photoDataList[5001] = {"name" : "G・ロードランナーフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/156515\">p5001</a>"};
    photoDataList[5002] = {"name" : "N・ハイランドワイルドドッグフォト", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/777456\">p5002</a>"};
    photoDataList[5003] = {"name" : "【大きな瞳の美人顔】サーバルフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/792889\">p5003</a>"};
    photoDataList[5004] = {"name" : "ちびくまモンフォト", "errorType" : 3, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/383336\">p5004</a>"};
    photoDataList[5005] = {"name" : "でびるさまフォト", "errorType" : 3, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/332668\">p5005</a>"};
    photoDataList[5006] = {"name" : "ひぐまモンフォト", "errorType" : 3, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/383589\">p5006</a>"};
    photoDataList[5007] = {"name" : "アイアイフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/145116\">p5007</a>"};
    photoDataList[5008] = {"name" : "アイベックスフォト", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/804535\">p5008</a>"};
    photoDataList[5009] = {"name" : "アオツラカツオドリフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/354732\">p5009</a>"};
    photoDataList[5010] = {"name" : "アカギツネフォト", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/208050\">p5010</a>"};
    photoDataList[5011] = {"name" : "アカミミガメフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/173014\">p5011</a>"};
    photoDataList[5012] = {"name" : "アゴヒゲアザラシフォト", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/283159\">p5012</a>"};
    photoDataList[5013] = {"name" : "アデリーペンギンフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/217030\">p5013</a>"};
    photoDataList[5014] = {"name" : "アフリカオオコノハズクフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/145051\">p5014</a>"};
    photoDataList[5015] = {"name" : "アフリカオニネズミフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/265282\">p5015</a>"};
    photoDataList[5016] = {"name" : "アフリカゾウフォト", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/163232\">p5016</a>"};
    photoDataList[5017] = {"name" : "アフリカタテガミヤマアラシフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/371915\">p5017</a>"};
    photoDataList[5018] = {"name" : "アフリカニシキヘビフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/144735\">p5018</a>"};
    photoDataList[5019] = {"name" : "アフリカンゴールデンウルフフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/766341\">p5019</a>"};
    photoDataList[5020] = {"name" : "アマゾンツリーボアフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/360408\">p5020</a>"};
    photoDataList[5021] = {"name" : "アミメキリンフォト", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/144709\">p5021</a>"};
    photoDataList[5022] = {"name" : "アムールトラフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/204774\">p5022</a>"};
    photoDataList[5023] = {"name" : "アメリカビーバーフォト", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/163244\">p5023</a>"};
    photoDataList[5024] = {"name" : "アメリカレアフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/163245\">p5024</a>"};
    photoDataList[5025] = {"name" : "アライグマフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/144728\">p5025</a>"};
    photoDataList[5026] = {"name" : "アラスカラッコフォト", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/825698\">p5026</a>"};
    photoDataList[5027] = {"name" : "アラビアオリックスフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/200931\">p5027</a>"};
    photoDataList[5028] = {"name" : "アリサ＝サザンクロスフォト", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/630052\">p5028</a>"};
    photoDataList[5029] = {"name" : "アリゾナジャガーフォト", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/792619\">p5029</a>"};
    photoDataList[5030] = {"name" : "アリツカゲラフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/160200\">p5030</a>"};
    photoDataList[5031] = {"name" : "アルパカ・スリフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/145046\">p5031</a>"};
    photoDataList[5032] = {"name" : "アルパカ・ワカイヤフォト", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/144734\">p5032</a>"};
    photoDataList[5033] = {"name" : "アードウルフフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/189208\">p5033</a>"};
    photoDataList[5034] = {"name" : "イイズナフォト", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/828855\">p5034</a>"};
    photoDataList[5035] = {"name" : "イエイヌ（シバイヌ）フォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/284509\">p5035</a>"};
    photoDataList[5036] = {"name" : "イエイヌ（シベリアンハスキー）フォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/286323\">p5036</a>"};
    photoDataList[5037] = {"name" : "イエイヌ（雑種）フォト", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/182886\">p5037</a>"};
    photoDataList[5038] = {"name" : "イエウサギフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/842222\">p5038</a>"};//後日実装
    photoDataList[5039] = {"name" : "イエネコフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/253408\">p5039</a>"};
    photoDataList[5040] = {"name" : "イッカクフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/162664\">p5040</a>"};
    photoDataList[5041] = {"name" : "イヌガミギョウブフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/287494\">p5041</a>"};
    photoDataList[5042] = {"name" : "イリエワニフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/277622\">p5042</a>"};
    photoDataList[5043] = {"name" : "イリオモテヤマネコフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/365331\">p5043</a>"};
    photoDataList[5044] = {"name" : "イワトビペンギンフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/145970\">p5044</a>"};
    photoDataList[5045] = {"name" : "インドオオカミフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/263860\">p5045</a>"};
    photoDataList[5046] = {"name" : "インドサイフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/366387\">p5046</a>"};
    photoDataList[5047] = {"name" : "インドシナウォータードラゴンフォト", "errorType" : 3, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/818022\">p5047</a>"};//後日実装
    photoDataList[5048] = {"name" : "インドゾウフォト", "errorType" : 3, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/203060\">p5048</a>"};//後日実装
    photoDataList[5049] = {"name" : "インパラフォト", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/787693\">p5049</a>"};
    photoDataList[5050] = {"name" : "ウィッチフォト", "errorType" : 3, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/265887\">p5050</a>"};
    photoDataList[5051] = {"name" : "ウサギコウモリフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/397275\">p5051</a>"};
    photoDataList[5052] = {"name" : "ウミウフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/795745\">p5052</a>"};
    photoDataList[5053] = {"name" : "ウミネコフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/294500\">p5053</a>"};
    photoDataList[5054] = {"name" : "ウンピョウフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/303381\">p5054</a>"};
    photoDataList[5055] = {"name" : "エゾヒグマフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/173017\">p5055</a>"};
    photoDataList[5056] = {"name" : "エゾユキウサギフォト", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/842175\">p5056</a>"};
    photoDataList[5057] = {"name" : "エダハヘラオヤモリフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/785682\">p5057</a>"};
    photoDataList[5058] = {"name" : "エトピリカフォト", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/637863\">p5058</a>"};
    photoDataList[5059] = {"name" : "エメラルドツリーボアフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/358040\">p5059</a>"};
    photoDataList[5060] = {"name" : "エリマキトカゲフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/820146\">p5060</a>"};//後日実装
    photoDataList[5061] = {"name" : "オイナリサマフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/144712\">p5061</a>"};
    photoDataList[5062] = {"name" : "オオアリクイフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/147915\">p5062</a>"};
    photoDataList[5063] = {"name" : "オオアルマジロフォト", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/163246\">p5063</a>"};
    photoDataList[5064] = {"name" : "オオウミガラスフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/271080\">p5064</a>"};
    photoDataList[5065] = {"name" : "オオカワウソフォト", "errorType" : 3, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/326412\">p5065</a>"};//後日実装
    photoDataList[5066] = {"name" : "オオサイチョウフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/335278\">p5066</a>"};
    photoDataList[5067] = {"name" : "オオセンザンコウフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/146292\">p5067</a>"};
    photoDataList[5068] = {"name" : "オオタカフォト", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/163233\">p5068</a>"};
    photoDataList[5069] = {"name" : "オオフウチョウフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/145922\">p5069</a>"};
    photoDataList[5070] = {"name" : "オオフラミンゴフォト", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/163234\">p5070</a>"};
    photoDataList[5071] = {"name" : "オオミミギツネフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/259363\">p5071</a>"};
    photoDataList[5072] = {"name" : "オカピフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/225176\">p5072</a>"};
    photoDataList[5073] = {"name" : "オグロスナギツネフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/667004\">p5073</a>"};
    photoDataList[5074] = {"name" : "オグロヌーフォト", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/163247\">p5074</a>"};
    photoDataList[5075] = {"name" : "オグロプレーリードッグフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/163235\">p5075</a>"};
    photoDataList[5076] = {"name" : "オコジョフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/393461\">p5076</a>"};
    photoDataList[5077] = {"name" : "オジロスナギツネフォト", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/658150\">p5077</a>"};
    photoDataList[5078] = {"name" : "オジロヌーフォト", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/163248\">p5078</a>"};
    photoDataList[5079] = {"name" : "オセロットフォト", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/758232\">p5079</a>"};
    photoDataList[5080] = {"name" : "オランウータンフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/336965\">p5080</a>"};
    photoDataList[5081] = {"name" : "オーストラリアデビルフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/146304\">p5081</a>"};
    photoDataList[5082] = {"name" : "オーロックスフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/214680\">p5082</a>"};
    photoDataList[5083] = {"name" : "カグヤコウモリフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/268419\">p5083</a>"};
    photoDataList[5084] = {"name" : "カコミスルフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/332048\">p5084</a>"};
    photoDataList[5085] = {"name" : "カタカケフウチョウフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/146738\">p5085</a>"};
    photoDataList[5086] = {"name" : "カバフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/155106\">p5086</a>"};
    photoDataList[5087] = {"name" : "カピバラフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/148574\">p5087</a>"};
    photoDataList[5088] = {"name" : "カマイタチ・切フォト", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/537929\">p5088</a>"};
    photoDataList[5089] = {"name" : "カマイタチ・治フォト", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/544123\">p5089</a>"};
    photoDataList[5090] = {"name" : "カマイタチ・転フォト", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/544122\">p5090</a>"};
    photoDataList[5091] = {"name" : "カムチャッカオオヒグマフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/191759\">p5091</a>"};
    photoDataList[5092] = {"name" : "カモメフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/760299\">p5092</a>"};
    photoDataList[5093] = {"name" : "カラカルフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/212605\">p5093</a>"};
    photoDataList[5094] = {"name" : "カリフォルニアアシカフォト", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/163249\">p5094</a>"};
    photoDataList[5095] = {"name" : "カリフォルニアラッコフォト", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/163236\">p5095</a>"};
    photoDataList[5096] = {"name" : "カルガモフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/244980\">p5096</a>"};
    photoDataList[5097] = {"name" : "カワウフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/795901\">p5097</a>"};
    photoDataList[5098] = {"name" : "カンザシフウチョウフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/146740\">p5098</a>"};
    photoDataList[5099] = {"name" : "カンジキウサギフォト", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/766717\">p5099</a>"};
    photoDataList[5100] = {"name" : "ガチャピンフォト", "errorType" : 3, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/354966\">p5100</a>"};
    photoDataList[5101] = {"name" : "キジフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/351514\">p5101</a>"};
    photoDataList[5102] = {"name" : "キタキツネフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/155605\">p5102</a>"};
    photoDataList[5103] = {"name" : "キットギツネフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/816648\">p5103</a>"};//後日実装
    photoDataList[5104] = {"name" : "キティサーバルフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/211062\">p5104</a>"};
    photoDataList[5105] = {"name" : "キュウビキツネフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/287486\">p5105</a>"};
    photoDataList[5106] = {"name" : "キンイロジャッカルフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/768896\">p5106</a>"};
    photoDataList[5107] = {"name" : "キングコブラフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/155615\">p5107</a>"};
    photoDataList[5108] = {"name" : "キングチーターフォト", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/656363\">p5108</a>"};
    photoDataList[5109] = {"name" : "キングペンギンフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/253417\">p5109</a>"};
    photoDataList[5110] = {"name" : "キンシコウフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/155618\">p5110</a>"};
    photoDataList[5111] = {"name" : "ギロロフォト", "errorType" : 3, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/827322\">p5111</a>"};
    photoDataList[5112] = {"name" : "ギンギツネフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/155651\">p5112</a>"};
    photoDataList[5113] = {"name" : "クジャクフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/163237\">p5113</a>"};
    photoDataList[5114] = {"name" : "クズリフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/296211\">p5114</a>"};
    photoDataList[5115] = {"name" : "クロサイフォト", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/163238\">p5115</a>"};
    photoDataList[5116] = {"name" : "クロトキフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/181136\">p5116</a>"};
    photoDataList[5117] = {"name" : "クロヒョウフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/209497\">p5117</a>"};
    photoDataList[5118] = {"name" : "ケツァールフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/236030\">p5118</a>"};
    photoDataList[5119] = {"name" : "ケルベロスフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/295219\">p5119</a>"};
    photoDataList[5120] = {"name" : "ケロロフォト", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/629750\">p5120</a>"};
    photoDataList[5121] = {"name" : "ケープペンギンフォト", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/250721\">p5121</a>"};
    photoDataList[5122] = {"name" : "ケープライオンフォト", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/776170\">p5122</a>"};
    photoDataList[5123] = {"name" : "ゲンブフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/261322\">p5123</a>"};
    photoDataList[5124] = {"name" : "コアラフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/323001\">p5124</a>"};
    photoDataList[5125] = {"name" : "コウテイペンギンフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/155653\">p5125</a>"};
    photoDataList[5126] = {"name" : "コウノトリフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/389071\">p5126</a>"};
    photoDataList[5127] = {"name" : "コツメカワウソフォト", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/163239\">p5127</a>"};
    photoDataList[5128] = {"name" : "コディアックヒグマフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/184803\">p5128</a>"};
    photoDataList[5129] = {"name" : "コモドドラゴンフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/189428\">p5129</a>"};
    photoDataList[5130] = {"name" : "コヨーテフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/341353\">p5130</a>"};
    photoDataList[5131] = {"name" : "コンゴウインコフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/293089\">p5131</a>"};
    photoDataList[5132] = {"name" : "ゴシンギュウサマフォト", "errorType" : 3, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/312048\">p5132</a>"};//後日実装
    photoDataList[5133] = {"name" : "ゴリラフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/258444\">p5133</a>"};
    photoDataList[5134] = {"name" : "ゴルゴプスカバフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/373246\">p5134</a>"};
    photoDataList[5135] = {"name" : "ゴールデンタビータイガーフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/284515\">p5135</a>"};
    photoDataList[5136] = {"name" : "サバンナシマウマフォト", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/163250\">p5136</a>"};
    photoDataList[5137] = {"name" : "サラブレッドあおかげフォト", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/169686\">p5137</a>"};
    photoDataList[5138] = {"name" : "サラブレッドくりげフォト", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/169679\">p5138</a>"};
    photoDataList[5139] = {"name" : "サラブレッドしろげフォト", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/169683\">p5139</a>"};
    photoDataList[5140] = {"name" : "サーバルフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/241507\">p5140</a>"};
    photoDataList[5141] = {"name" : "サーベルタイガーフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/221595\">p5141</a>"};
    photoDataList[5142] = {"name" : "シナウスイロイルカフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/147920\">p5142</a>"};
    photoDataList[5143] = {"name" : "シベリアオオヤマネコフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/460105\">p5143</a>"};
    photoDataList[5144] = {"name" : "シマハイイロギツネフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/330851\">p5144</a>"};
    photoDataList[5145] = {"name" : "シマリスフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/408128\">p5145</a>"};
    photoDataList[5146] = {"name" : "シャチフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/185310\">p5146</a>"};
    photoDataList[5147] = {"name" : "ショウジョウトキフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/147912\">p5147</a>"};
    photoDataList[5148] = {"name" : "シロクジャクフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/759676\">p5148</a>"};
    photoDataList[5149] = {"name" : "シロサイフォト", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/163240\">p5149</a>"};
    photoDataList[5150] = {"name" : "シロナガスクジラフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/158131\">p5150</a>"};
    photoDataList[5151] = {"name" : "シロヘラコウモリフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/299164\">p5151</a>"};
    photoDataList[5152] = {"name" : "シヴァテリウムフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/267432\">p5152</a>"};
    photoDataList[5153] = {"name" : "シーサーバル・ライトフォト", "errorType" : 3, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/146719\">p5153</a>"};
    photoDataList[5154] = {"name" : "シーサーバル・レフティフォト", "errorType" : 3, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/146727\">p5154</a>"};
    photoDataList[5155] = {"name" : "シーサー・ライトフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/189207\">p5155</a>"};
    photoDataList[5156] = {"name" : "シーサー・レフティフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/189204\">p5156</a>"};
    photoDataList[5157] = {"name" : "シーラカンスフォト", "errorType" : 3, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/774125\">p5157</a>"};
    photoDataList[5158] = {"name" : "ジェネットフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/750876\">p5158</a>"};
    photoDataList[5159] = {"name" : "ジェンツーペンギンフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/158638\">p5159</a>"};
    photoDataList[5160] = {"name" : "ジャイアントパンダフォト", "errorType" : 3, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/186486\">p5160</a>"};//後日実装
    photoDataList[5161] = {"name" : "ジャイアントペンギンフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/158700\">p5161</a>"};
    photoDataList[5162] = {"name" : "ジャガーフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/158647\">p5162</a>"};
    photoDataList[5163] = {"name" : "ジャック・オー・ランタンフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/196981\">p5163</a>"};
    photoDataList[5164] = {"name" : "ジャングルキャットフォト", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/815392\">p5164</a>"};
    photoDataList[5165] = {"name" : "ジョフロイネコフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/272900\">p5165</a>"};
    photoDataList[5166] = {"name" : "スカイフィッシュフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/203056\">p5166</a>"};
    photoDataList[5167] = {"name" : "スザクフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/281270\">p5167</a>"};
    photoDataList[5168] = {"name" : "スナネコフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/159125\">p5168</a>"};
    photoDataList[5169] = {"name" : "スマトラトラフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/726529\">p5169</a>"};
    photoDataList[5170] = {"name" : "セイウチフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/347475\">p5170</a>"};
    photoDataList[5171] = {"name" : "セイリュウフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/301818\">p5171</a>"};
    photoDataList[5172] = {"name" : "セキショクヤケイフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/747910\">p5172</a>"};
    photoDataList[5173] = {"name" : "セーバルフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/238863\">p5173</a>"};
    photoDataList[5174] = {"name" : "ソンゴクウフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/327668\">p5174</a>"};
    photoDataList[5175] = {"name" : "タイリクオオカミフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/160394\">p5175</a>"};
    photoDataList[5176] = {"name" : "タスマニアデビルフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/158664\">p5176</a>"};
    photoDataList[5177] = {"name" : "タチコマtype-Hフォト", "errorType" : 3, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/289270\">p5177</a>"};
    photoDataList[5178] = {"name" : "タチコマtype-Sフォト", "errorType" : 3, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/289268\">p5178</a>"};
    photoDataList[5179] = {"name" : "タテガミオオカミフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/839866\">p5179</a>"};
    photoDataList[5180] = {"name" : "タテゴトアザラシフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/223374\">p5180</a>"};
    photoDataList[5181] = {"name" : "タヌキフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/160402\">p5181</a>"};
    photoDataList[5182] = {"name" : "ダイアウルフフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/303379\">p5182</a>"};
    photoDataList[5183] = {"name" : "ダイトウオオコウモリフォト", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/828853\">p5183</a>"};
    photoDataList[5184] = {"name" : "ダチョウフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/163251\">p5184</a>"};
    photoDataList[5185] = {"name" : "ダンザブロウダヌキフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/344106\">p5185</a>"};
    photoDataList[5186] = {"name" : "チベットスナギツネフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/176096\">p5186</a>"};
    photoDataList[5187] = {"name" : "チャップマンシマウマフォト", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/163252\">p5187</a>"};
    photoDataList[5188] = {"name" : "チンチラフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/160406\">p5188</a>"};
    photoDataList[5189] = {"name" : "チーターフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/194164\">p5189</a>"};
    photoDataList[5190] = {"name" : "ツクヨミノシンシフォト", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/394463\">p5190</a>"};
    photoDataList[5191] = {"name" : "ツシマヤマネコフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/356962\">p5191</a>"};
    photoDataList[5192] = {"name" : "ツチノコフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/160458\">p5192</a>"};
    photoDataList[5193] = {"name" : "ツチブタフォト", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/792638\">p5193</a>"};
    photoDataList[5194] = {"name" : "ツノサイチョウフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/336311\">p5194</a>"};
    photoDataList[5195] = {"name" : "ツンドラオオカミフォト", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/815391\">p5195</a>"};
    photoDataList[5196] = {"name" : "テングコウモリフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/297472\">p5196</a>"};
    photoDataList[5197] = {"name" : "ディアトリマフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/464075\">p5197</a>"};
    photoDataList[5198] = {"name" : "デグーフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/144736\">p5198</a>"};
    photoDataList[5199] = {"name" : "トキフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/163241\">p5199</a>"};
    photoDataList[5200] = {"name" : "トドフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/296208\">p5200</a>"};
    photoDataList[5201] = {"name" : "トナカイフォト", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/163243\">p5201</a>"};
    photoDataList[5202] = {"name" : "トムソンガゼルフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/191760\">p5202</a>"};
    photoDataList[5203] = {"name" : "トラフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/318901\">p5203</a>"};
    photoDataList[5204] = {"name" : "ドラコケンタウロスフォト", "errorType" : 3, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/265889\">p5204</a>"};
    photoDataList[5205] = {"name" : "ドールシープフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/545890\">p5205</a>"};
    photoDataList[5206] = {"name" : "ドールフォト", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/144624\">p5206</a>"};
    photoDataList[5207] = {"name" : "ナミチスイコウモリフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/190635\">p5207</a>"};
    photoDataList[5208] = {"name" : "ニホンオオカミフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/208044\">p5208</a>"};
    photoDataList[5209] = {"name" : "ニホンカワウソフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/218133\">p5209</a>"};
    photoDataList[5210] = {"name" : "ニホンザルフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/305287\">p5210</a>"};
    photoDataList[5211] = {"name" : "ニホンジカフォト", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/806429\">p5211</a>"};
    photoDataList[5212] = {"name" : "ニホンノウサギフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/390824\">p5212</a>"};
    photoDataList[5213] = {"name" : "ニワトリフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/281645\">p5213</a>"};
    photoDataList[5214] = {"name" : "ノドグロミツオシエフォト", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/283160\">p5214</a>"};
    photoDataList[5215] = {"name" : "ハクトウワシフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/163253\">p5215</a>"};
    photoDataList[5216] = {"name" : "ハシビロコウフォト", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/161684\">p5216</a>"};
    photoDataList[5217] = {"name" : "ハシブトガラスフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/248385\">p5217</a>"};
    photoDataList[5218] = {"name" : "ハブフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/246076\">p5218</a>"};
    photoDataList[5219] = {"name" : "ハヤブサフォト", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/656574\">p5219</a>"};
    photoDataList[5220] = {"name" : "バンテンフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/816053\">p5220</a>"};
    photoDataList[5221] = {"name" : "バンドウイルカフォト", "errorType" : 3, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/179659\">p5221</a>"};//後日実装
    photoDataList[5222] = {"name" : "バーバリライオンフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/278809\">p5222</a>"};
    photoDataList[5223] = {"name" : "パフィンフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/170990\">p5223</a>"};
    photoDataList[5224] = {"name" : "パラケラテリウムフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/289848\">p5224</a>"};
    photoDataList[5225] = {"name" : "パンサーカメレオンフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/160201\">p5225</a>"};
    photoDataList[5226] = {"name" : "ヒクイドリフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/778610\">p5226</a>"};
    photoDataList[5227] = {"name" : "ヒグマフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/161686\">p5227</a>"};
    photoDataList[5228] = {"name" : "ヒゲペンギンフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/374837\">p5228</a>"};
    photoDataList[5229] = {"name" : "ヒツジフォト", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/163242\">p5229</a>"};
    photoDataList[5230] = {"name" : "ヒトコブラクダフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/162128\">p5230</a>"};
    photoDataList[5231] = {"name" : "ヒメアリクイフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/159134\">p5231</a>"};
    photoDataList[5232] = {"name" : "ヒメアルマジロフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/346440\">p5232</a>"};
    photoDataList[5233] = {"name" : "ヒメウォンバットフォト", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/804533\">p5233</a>"};
    photoDataList[5234] = {"name" : "ヒョウフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/258445\">p5234</a>"};
    photoDataList[5235] = {"name" : "ビャッコフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/244999\">p5235</a>"};
    photoDataList[5236] = {"name" : "ビントロングフォト", "errorType" : 3, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/824143\">p5236</a>"};//後日実装
    photoDataList[5237] = {"name" : "ピューマフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/842186\">p5237</a>"};
    photoDataList[5238] = {"name" : "ピーチパンサーフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/162125\">p5238</a>"};
    photoDataList[5239] = {"name" : "フェネックフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/144731\">p5239</a>"};
    photoDataList[5240] = {"name" : "フォッサフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/250741\">p5240</a>"};
    photoDataList[5241] = {"name" : "フォークランドカラカラフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/291803\">p5241</a>"};
    photoDataList[5242] = {"name" : "フクロオオカミフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/777729\">p5242</a>"};
    photoDataList[5243] = {"name" : "フクロネコフォト", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/328359\">p5243</a>"};
    photoDataList[5244] = {"name" : "フタコブラクダフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/162126\">p5244</a>"};
    photoDataList[5245] = {"name" : "フンボルトペンギンフォト", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/162728\">p5245</a>"};
    photoDataList[5246] = {"name" : "ブタフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/164298\">p5246</a>"};
    photoDataList[5247] = {"name" : "ブチハイエナフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/379313\">p5247</a>"};
    photoDataList[5248] = {"name" : "ブラックサーバルフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/800479\">p5248</a>"};//後日実装
    photoDataList[5249] = {"name" : "ブラックジャガーフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/162733\">p5249</a>"};
    photoDataList[5250] = {"name" : "ブラックバックフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/162736\">p5250</a>"};
    photoDataList[5251] = {"name" : "ブラックマンバフォト", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/478924\">p5251</a>"};
    photoDataList[5252] = {"name" : "ブラッザグエノンフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/310749\">p5252</a>"};
    photoDataList[5253] = {"name" : "プロングホーンフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/155103\">p5253</a>"};
    photoDataList[5254] = {"name" : "ヘビクイワシフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/261321\">p5254</a>"};
    photoDataList[5255] = {"name" : "ヘラジカフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/162745\">p5255</a>"};
    photoDataList[5256] = {"name" : "ホッキョクウサギフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/161673\">p5256</a>"};
    photoDataList[5257] = {"name" : "ホッキョクオオカミフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/304601\">p5257</a>"};
    photoDataList[5258] = {"name" : "ホッキョクギツネフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/306160\">p5258</a>"};
    photoDataList[5259] = {"name" : "ホッキョクグマフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/344951\">p5259</a>"};
    photoDataList[5260] = {"name" : "ホラアナライオンフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/377529\">p5260</a>"};
    photoDataList[5261] = {"name" : "ホルスタインフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/212773\">p5261</a>"};
    photoDataList[5262] = {"name" : "ホロホロチョウフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/352195\">p5262</a>"};
    photoDataList[5263] = {"name" : "ホワイトカリブーフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/750881\">p5263</a>"};
    photoDataList[5264] = {"name" : "ホワイトサーバルフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/189438\">p5264</a>"};
    photoDataList[5265] = {"name" : "ホワイトタイガーフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/157888\">p5265</a>"};
    photoDataList[5266] = {"name" : "ホワイトライオンフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/162747\">p5266</a>"};
    photoDataList[5267] = {"name" : "ホンドテンフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/842185\">p5267</a>"};//後日実装
    photoDataList[5268] = {"name" : "マイルカフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/163254\">p5268</a>"};
    photoDataList[5269] = {"name" : "マカミフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/325232\">p5269</a>"};
    photoDataList[5270] = {"name" : "マサイキリンフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/363635\">p5270</a>"};
    photoDataList[5271] = {"name" : "マヌルネコフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/178628\">p5271</a>"};
    photoDataList[5272] = {"name" : "マルタタイガーフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/284516\">p5272</a>"};
    photoDataList[5273] = {"name" : "マレーバクフォト", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/163255\">p5273</a>"};
    photoDataList[5274] = {"name" : "マンドリルフォト", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/772379\">p5274</a>"};
    photoDataList[5275] = {"name" : "マンモスフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/257002\">p5275</a>"};
    photoDataList[5276] = {"name" : "マーゲイフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/159135\">p5276</a>"};
    photoDataList[5277] = {"name" : "マーモットフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/271074\">p5277</a>"};
    photoDataList[5278] = {"name" : "ミナミコアリクイフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/163256\">p5278</a>"};
    photoDataList[5279] = {"name" : "ミミィサーバルフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/211064\">p5279</a>"};
    photoDataList[5280] = {"name" : "ミーアキャットフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/163257\">p5280</a>"};
    photoDataList[5281] = {"name" : "ムックフォト", "errorType" : 3, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/354971\">p5281</a>"};
    photoDataList[5282] = {"name" : "メガネカイマンフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/392178\">p5282</a>"};
    photoDataList[5283] = {"name" : "メキシコサラマンダーフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/253729\">p5283</a>"};
    photoDataList[5284] = {"name" : "メンダコフォト", "errorType" : 3, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/775026\">p5284</a>"};
    photoDataList[5285] = {"name" : "ヤクフォト", "errorType" : 3, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/218124\">p5285</a>"};//後日実装
    photoDataList[5286] = {"name" : "ヤタガラスフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/267427\">p5286</a>"};
    photoDataList[5287] = {"name" : "ヤブツカツクリフォト", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/808807\">p5287</a>"};
    photoDataList[5288] = {"name" : "ヤブノウサギフォト", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/572313\">p5288</a>"};
    photoDataList[5289] = {"name" : "ヤマタノオロチフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/352713\">p5289</a>"};
    photoDataList[5290] = {"name" : "ヤマバクフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/163258\">p5290</a>"};
    photoDataList[5291] = {"name" : "ヤンバルクイナフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/255070\">p5291</a>"};
    photoDataList[5292] = {"name" : "ユキウサギフォト", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/568648\">p5292</a>"};
    photoDataList[5293] = {"name" : "ユニコフォト", "errorType" : 3, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/230880\">p5293</a>"};
    photoDataList[5294] = {"name" : "ライオンフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/162920\">p5294</a>"};
    photoDataList[5295] = {"name" : "ライジュウフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/339600\">p5295</a>"};
    photoDataList[5296] = {"name" : "ラーテルフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/343044\">p5296</a>"};
    photoDataList[5297] = {"name" : "リカオンフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/162925\">p5297</a>"};
    photoDataList[5298] = {"name" : "リュウキュウイノシシフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/416995\">p5298</a>"};
    photoDataList[5299] = {"name" : "リョコウバトフォト", "errorType" : 1, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/204779\">p5299</a>"};
    photoDataList[5300] = {"name" : "ルリコンゴウインコフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/381470\">p5300</a>"};
    photoDataList[5301] = {"name" : "レッサーパンダフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/169663\">p5301</a>"};
    photoDataList[5302] = {"name" : "ロイヤルペンギンフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/162944\">p5302</a>"};
    photoDataList[5303] = {"name" : "ロバフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/301816\">p5303</a>"};
    photoDataList[5304] = {"name" : "ワオキツネザルフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/842227\">p5304</a>"};
    photoDataList[5305] = {"name" : "ワシミミズクフォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/162964\">p5305</a>"};
    photoDataList[5306] = {"name" : "人面魚フォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/253732\">p5306</a>"};
    photoDataList[5307] = {"name" : "日向夏美フォト", "errorType" : 3, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/827135\">p5307</a>"};
    photoDataList[5308] = {"name" : "火の鳥フォト", "errorType" : 3, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/230847\">p5308</a>"};
    photoDataList[5309] = {"name" : "真・青龍フォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/839465\">p5309</a>"};//後日実装
    photoDataList[5310] = {"name" : "麒麟フォト", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/377637\">p5310</a>"};
    photoDataList[5311] = {"name" : "エジプトガンフォト", "errorType" : 2, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/714329\">p5311</a>"};
    photoDataList[5312] = {"name" : "アリゲーターフォト", "errorType" : 2, "link" : "<a href=\"\">p5312</a>"};
    //育成用フォト
    photoDataList[6001] = {"name" : "輝きの欠片フォト☆4", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/842763\">p6001</a>"};
    photoDataList[6002] = {"name" : "輝きの欠片フォト☆3", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/842764\">p6002</a>"};
    photoDataList[6003] = {"name" : "ジャパまんフォト☆3", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/842765\">p6003</a>"};
    photoDataList[6004] = {"name" : "ジャパまんフォト☆2", "errorType" : 0, "link" : "<a href=\"https://gamerch.com/kemonofriends3/entry/842766\">p6004</a>"};
    if(k == "errorType") {
        switch(photoDataList[n][k]) {
            case 0:
                id.style.backgroundColor = "lime";
                id.style.textAlign = "center";
                id.innerHTML = "○";
                break;
            case 1:
                id.style.backgroundColor = "yellow";
                id.style.textAlign = "center";
                id.innerHTML = "△";
                break;
            case 2:
                id.style.backgroundColor = "red";
                id.style.textAlign = "center";
                id.innerHTML = "✕";
                break;
            case 3:
                id.style.backgroundColor = "white";
                id.style.textAlign = "center";
                id.innerHTML = "?";
        }
    } else {
        id.style.textAlign = "center";
        id.innerHTML = photoDataList[n][k];
    }
}

// 画像の情報を定義
    const images = [
      "https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzExMjRcL2VudHJ5XC9pSUtKQ2NidS5wbmciLCJlZGl0cyI6eyJ3ZWJwIjp7InF1YWxpdHkiOjg1fSwidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoxMDAsImZpdCI6ImNvdmVyIn19fQ==",
      "https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzExMjRcL2VudHJ5XC9WQUN1RjJlMC5wbmciLCJlZGl0cyI6eyJ3ZWJwIjp7InF1YWxpdHkiOjg1fSwidG9Gb3JtYXQiOiJ3ZWJwIn19",
      "https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzExMjRcL2VudHJ5XC9tVndhSkthbi5wbmciLCJlZGl0cyI6eyJ3ZWJwIjp7InF1YWxpdHkiOjg1fSwidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoxMDAsImZpdCI6ImNvdmVyIn19fQ==",
      "https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzExMjRcL2VudHJ5XC9FTklwYTFhMS5wbmciLCJlZGl0cyI6eyJ3ZWJwIjp7InF1YWxpdHkiOjg1fSwidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoxMDAsImZpdCI6ImNvdmVyIn19fQ==",
      "https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzExMjRcL2VudHJ5XC9CUnJxZHNLMi5wbmciLCJlZGl0cyI6eyJ3ZWJwIjp7InF1YWxpdHkiOjg1fSwidG9Gb3JtYXQiOiJ3ZWJwIn19",
      "https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzExMjRcL2VudHJ5XC9IUlFxSXN3dy5wbmciLCJlZGl0cyI6eyJ3ZWJwIjp7InF1YWxpdHkiOjg1fSwidG9Gb3JtYXQiOiJ3ZWJwIn19",
      "https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzExMjRcL2VudHJ5XC9ZTTkxOFJKZC5wbmciLCJlZGl0cyI6eyJ3ZWJwIjp7InF1YWxpdHkiOjg1fSwidG9Gb3JtYXQiOiJ3ZWJwIn19",
      "https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzExMjRcL2VudHJ5XC9vUkR2R3JqYS5wbmciLCJlZGl0cyI6eyJ3ZWJwIjp7InF1YWxpdHkiOjg1fSwidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoxMDAsImZpdCI6ImNvdmVyIn19fQ==",
      "https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzExMjRcL2VudHJ5XC9PYzZYOU1CZy5wbmciLCJlZGl0cyI6eyJ3ZWJwIjp7InF1YWxpdHkiOjg1fSwidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoxMDAsImZpdCI6ImNvdmVyIn19fQ==",
      "https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzExMjRcL2VudHJ5XC8xN2tHRGJvYy5wbmciLCJlZGl0cyI6eyJ3ZWJwIjp7InF1YWxpdHkiOjg1fSwidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoxMDAsImZpdCI6ImNvdmVyIn19fQ==",
      "https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzExMjRcL2VudHJ5XC80b01Cb2Jjei5wbmciLCJlZGl0cyI6eyJ3ZWJwIjp7InF1YWxpdHkiOjg1fSwidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoxMDAsImZpdCI6ImNvdmVyIn19fQ==",
      "https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzExMjRcL2VudHJ5XC9NbmJJeTBLcS5wbmciLCJlZGl0cyI6eyJ3ZWJwIjp7InF1YWxpdHkiOjg1fSwidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoxMDAsImZpdCI6ImNvdmVyIn19fQ==",
      "https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzExMjRcL2VudHJ5XC9GUVJZZFROei5wbmciLCJlZGl0cyI6eyJ3ZWJwIjp7InF1YWxpdHkiOjg1fSwidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoxMDAsImZpdCI6ImNvdmVyIn19fQ==",
      "https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzExMjRcL2VudHJ5XC9ibWhScGpBeC5wbmciLCJlZGl0cyI6eyJ3ZWJwIjp7InF1YWxpdHkiOjg1fSwidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoxMDAsImZpdCI6ImNvdmVyIn19fQ==",
      "https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzExMjRcL2VudHJ5XC9yeUJCODltWC5wbmciLCJlZGl0cyI6eyJ3ZWJwIjp7InF1YWxpdHkiOjg1fSwidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoxMDAsImZpdCI6ImNvdmVyIn19fQ==",
      "https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzExMjRcL2VudHJ5XC9zYjVwZG95cS5wbmciLCJlZGl0cyI6eyJ3ZWJwIjp7InF1YWxpdHkiOjg1fSwidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoxMDAsImZpdCI6ImNvdmVyIn19fQ=="
    ];

    // 正しい画像のインデックスを定義
    const correctSelections = [5,6,7,9,10,11,13,14];

    // 選択した画像のインデックスを格納する配列
    let selectedImages = [];

    // モーダルウィンドウ要素を取得
    const modal = document.getElementById('modal');

    // 画像を表示する関数
    function displayImages() {
      const container = document.querySelector('.image-container');
      container.innerHTML = '';

      images.forEach((image, index) => {
        const img = document.createElement('img');
        img.src = image;
        img.dataset.index = index;
        img.onclick = selectImage;
        container.appendChild(img);
      });
    }

    // 画像を選択する関数
    function selectImage(event) {
      const imageIndex = parseInt(event.target.dataset.index);

      // すでに選択済みの場合は選択を解除し、そうでない場合は選択を追加する
      if (selectedImages.includes(imageIndex)) {
        selectedImages = selectedImages.filter((index) => index !== imageIndex);
        event.target.style.border = 'none';
      } else {
        selectedImages.push(imageIndex);
        event.target.style.border = '2px solid blue';
      }
    }

    // 認証を開始する関数
    function startAuthentication() {
      selectedImages = [];
      displayImages();
      modal.style.display = 'block';
    }

    // 認証をキャンセルする関数
    function cancelAuthentication() {
      selectedImages = [];
      modal.style.display = 'none';
    }

    // 選択を検証する関数
    function verifySelections() {
      if (selectedImages.length !== correctSelections.length) {
        showMessage('認証に失敗しました。');
        return;
      }

      const sortedSelected = selectedImages.sort();
      const sortedCorrect = correctSelections.sort();

      if (JSON.stringify(sortedSelected) === JSON.stringify(sortedCorrect)) {
        alert("このページを閲覧する権限がありません。");
      } else {
        showMessage('Authentication failed!');
      }
    }

    // エラーメッセージを表示する関数
    function showMessage(message) {
      const messageElement = document.getElementById('message');
      messageElement.textContent = message;
    }

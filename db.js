window.ASSET_LIFELOG_DB = {
  "app": {
    "name": "Asset Vision",
    "version": "0.4.0",
    "schemaVersion": 2,
    "concept": "スクショだけで資産を記録し、自分の資産を教材にしてお金・経済を学ぶアプリ"
  },
  "purposeMaster": [
    {
      "id": "retirement",
      "icon": "👴",
      "label": "老後"
    },
    {
      "id": "defense",
      "icon": "🛡️",
      "label": "守る"
    },
    {
      "id": "growth",
      "icon": "📈",
      "label": "増やす"
    },
    {
      "id": "diversification",
      "icon": "🌍",
      "label": "分散"
    },
    {
      "id": "learning",
      "icon": "🔍",
      "label": "観測"
    },
    {
      "id": "goal",
      "icon": "🎯",
      "label": "目標"
    },
    {
      "id": "hobby",
      "icon": "🎨",
      "label": "趣味"
    },
    {
      "id": "cashflow",
      "icon": "💰",
      "label": "生活費"
    }
  ],
  "channels": [
    {
      "id": "ideco_gold",
      "displayOrder": 1,
      "name": "iDeCo（金）",
      "type": "retirement",
      "assetClass": "gold",
      "mainPurpose": "retirement",
      "purposes": [
        "retirement",
        "defense"
      ],
      "currency": "JPY",
      "color": "#c9a227",
      "active": true,
      "policy": "老後資金。金を中心に運用し、2030年頃から段階的に定期預金へスイッチ予定。",
      "note": "三菱UFJ純金ファンド。2024年4月以降のExcel履歴を初期データとして取り込み。"
    },
    {
      "id": "saison_nisa",
      "displayOrder": 2,
      "name": "セゾンNISA",
      "type": "nisa",
      "assetClass": "global_equity",
      "mainPurpose": "growth",
      "purposes": [
        "growth",
        "diversification"
      ],
      "currency": "JPY",
      "color": "#3b82f6",
      "active": true,
      "policy": "世界株分散の長期運用。一部は一口馬主資金の待機枠として利用。",
      "note": "セゾンNISA取込MVPでスクショ読取に対応。観測開始日以降の実測データのみ保存。"
    },
    {
      "id": "rakuten",
      "displayOrder": 3,
      "name": "楽天",
      "type": "brokerage",
      "assetClass": "us_equity_ai_watch",
      "mainPurpose": "learning",
      "purposes": [
        "learning",
        "growth"
      ],
      "currency": "JPY",
      "color": "#22c55e",
      "active": true,
      "policy": "VTIを中心に米国株へ長期投資。JX金属などはAI関連相場の観測枠。",
      "note": "VTI・JX金属などの保有明細を今後追加予定。"
    }
  ],
  "accountDaily": [
    {
      "date": "2024-04-09",
      "channelId": "ideco_gold",
      "asset": 2644578,
      "principal": 1748000,
      "profit": 896578,
      "profitRate": 0.5129164759725401,
      "reportedDailyChange": null,
      "source": "excel_import"
    },
    {
      "date": "2024-04-10",
      "channelId": "ideco_gold",
      "asset": 2642260,
      "principal": 1748000,
      "profit": 894260,
      "profitRate": 0.5115903890160183,
      "reportedDailyChange": -2318,
      "source": "excel_import"
    },
    {
      "date": "2024-04-11",
      "channelId": "ideco_gold",
      "asset": 2662677,
      "principal": 1748000,
      "profit": 914677,
      "profitRate": 0.5232705949656751,
      "reportedDailyChange": 20417,
      "source": "excel_import"
    },
    {
      "date": "2024-04-12",
      "channelId": "ideco_gold",
      "asset": 2743630,
      "principal": 1748000,
      "profit": 995630,
      "profitRate": 0.5695823798627002,
      "reportedDailyChange": 80953,
      "source": "excel_import"
    },
    {
      "date": "2024-04-13",
      "channelId": "ideco_gold",
      "asset": 2743630,
      "principal": 1748000,
      "profit": 995630,
      "profitRate": 0.5695823798627002,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-04-14",
      "channelId": "ideco_gold",
      "asset": 2743630,
      "principal": 1748000,
      "profit": 995630,
      "profitRate": 0.5695823798627002,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-04-15",
      "channelId": "ideco_gold",
      "asset": 2865156,
      "principal": 1771000,
      "profit": 1094156,
      "profitRate": 0.6178181818181818,
      "reportedDailyChange": 121526,
      "source": "excel_import"
    },
    {
      "date": "2024-04-16",
      "channelId": "ideco_gold",
      "asset": 2836389,
      "principal": 1771000,
      "profit": 1065389,
      "profitRate": 0.6015748164878599,
      "reportedDailyChange": -28767,
      "source": "excel_import"
    },
    {
      "date": "2024-04-17",
      "channelId": "ideco_gold",
      "asset": 2772113,
      "principal": 1771000,
      "profit": 1001113,
      "profitRate": 0.5652811970638058,
      "reportedDailyChange": -64276,
      "source": "excel_import"
    },
    {
      "date": "2024-04-18",
      "channelId": "ideco_gold",
      "asset": 2676553,
      "principal": 1771000,
      "profit": 905553,
      "profitRate": 0.5113229813664596,
      "reportedDailyChange": -95560,
      "source": "excel_import"
    },
    {
      "date": "2024-04-19",
      "channelId": "ideco_gold",
      "asset": 2586566,
      "principal": 1771000,
      "profit": 815566,
      "profitRate": 0.4605115753811406,
      "reportedDailyChange": -89987,
      "source": "excel_import"
    },
    {
      "date": "2024-04-20",
      "channelId": "ideco_gold",
      "asset": 2586566,
      "principal": 1771000,
      "profit": 815566,
      "profitRate": 0.4605115753811406,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-04-21",
      "channelId": "ideco_gold",
      "asset": 2586566,
      "principal": 1771000,
      "profit": 815566,
      "profitRate": 0.4605115753811406,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-04-22",
      "channelId": "ideco_gold",
      "asset": 2563462,
      "principal": 1771000,
      "profit": 792462,
      "profitRate": 0.44746583850931676,
      "reportedDailyChange": -23104,
      "source": "excel_import"
    },
    {
      "date": "2024-04-23",
      "channelId": "ideco_gold",
      "asset": 2473386,
      "principal": 1771000,
      "profit": 702386,
      "profitRate": 0.3966041784302654,
      "reportedDailyChange": -90076,
      "source": "excel_import"
    },
    {
      "date": "2024-04-24",
      "channelId": "ideco_gold",
      "asset": 2532178,
      "principal": 1771000,
      "profit": 761178,
      "profitRate": 0.42980124223602484,
      "reportedDailyChange": 58792,
      "source": "excel_import"
    },
    {
      "date": "2024-04-25",
      "channelId": "ideco_gold",
      "asset": 2540179,
      "principal": 1771000,
      "profit": 769179,
      "profitRate": 0.4343190287972897,
      "reportedDailyChange": 8001,
      "source": "excel_import"
    },
    {
      "date": "2024-04-26",
      "channelId": "ideco_gold",
      "asset": 2590881,
      "principal": 1771000,
      "profit": 819881,
      "profitRate": 0.46294805194805194,
      "reportedDailyChange": 50702,
      "source": "excel_import"
    },
    {
      "date": "2024-04-27",
      "channelId": "ideco_gold",
      "asset": 2590881,
      "principal": 1771000,
      "profit": 819881,
      "profitRate": 0.46294805194805194,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-04-28",
      "channelId": "ideco_gold",
      "asset": 2590881,
      "principal": 1771000,
      "profit": 819881,
      "profitRate": 0.46294805194805194,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-04-29",
      "channelId": "ideco_gold",
      "asset": 2590881,
      "principal": 1771000,
      "profit": 819881,
      "profitRate": 0.46294805194805194,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-04-30",
      "channelId": "ideco_gold",
      "asset": 2564182,
      "principal": 1771000,
      "profit": 793182,
      "profitRate": 0.4478723884810841,
      "reportedDailyChange": -26699,
      "source": "excel_import"
    },
    {
      "date": "2024-05-01",
      "channelId": "ideco_gold",
      "asset": 2531909,
      "principal": 1771000,
      "profit": 760909,
      "profitRate": 0.42964935064935067,
      "reportedDailyChange": -32273,
      "source": "excel_import"
    },
    {
      "date": "2024-05-02",
      "channelId": "ideco_gold",
      "asset": 2536493,
      "principal": 1771000,
      "profit": 765493,
      "profitRate": 0.4322377188029362,
      "reportedDailyChange": 4584,
      "source": "excel_import"
    },
    {
      "date": "2024-05-03",
      "channelId": "ideco_gold",
      "asset": 2536493,
      "principal": 1771000,
      "profit": 765493,
      "profitRate": 0.4322377188029362,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-05-04",
      "channelId": "ideco_gold",
      "asset": 2536493,
      "principal": 1771000,
      "profit": 765493,
      "profitRate": 0.4322377188029362,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-05-05",
      "channelId": "ideco_gold",
      "asset": 2536493,
      "principal": 1771000,
      "profit": 765493,
      "profitRate": 0.4322377188029362,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-05-06",
      "channelId": "ideco_gold",
      "asset": 2536493,
      "principal": 1771000,
      "profit": 765493,
      "profitRate": 0.4322377188029362,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-05-07",
      "channelId": "ideco_gold",
      "asset": 2525885,
      "principal": 1771000,
      "profit": 754885,
      "profitRate": 0.4262478825522304,
      "reportedDailyChange": -10608,
      "source": "excel_import"
    },
    {
      "date": "2024-05-08",
      "channelId": "ideco_gold",
      "asset": 2525885,
      "principal": 1771000,
      "profit": 754885,
      "profitRate": 0.4262478825522304,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-05-09",
      "channelId": "ideco_gold",
      "asset": 2525796,
      "principal": 1771000,
      "profit": 754796,
      "profitRate": 0.426197628458498,
      "reportedDailyChange": -89,
      "source": "excel_import"
    },
    {
      "date": "2024-05-10",
      "channelId": "ideco_gold",
      "asset": 2572902,
      "principal": 1771000,
      "profit": 801902,
      "profitRate": 0.45279616036137776,
      "reportedDailyChange": 47106,
      "source": "excel_import"
    },
    {
      "date": "2024-05-11",
      "channelId": "ideco_gold",
      "asset": 2572902,
      "principal": 1771000,
      "profit": 801902,
      "profitRate": 0.45279616036137776,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-05-12",
      "channelId": "ideco_gold",
      "asset": 2572902,
      "principal": 1771000,
      "profit": 801902,
      "profitRate": 0.45279616036137776,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-05-13",
      "channelId": "ideco_gold",
      "asset": 2568227,
      "principal": 1771000,
      "profit": 797227,
      "profitRate": 0.4501564088085827,
      "reportedDailyChange": -4675,
      "source": "excel_import"
    },
    {
      "date": "2024-05-14",
      "channelId": "ideco_gold",
      "asset": 2568137,
      "principal": 1771000,
      "profit": 797137,
      "profitRate": 0.4501055900621118,
      "reportedDailyChange": -90,
      "source": "excel_import"
    },
    {
      "date": "2024-05-15",
      "channelId": "ideco_gold",
      "asset": 2606060,
      "principal": 1794000,
      "profit": 812060,
      "profitRate": 0.45265328874024524,
      "reportedDailyChange": 37923,
      "source": "excel_import"
    },
    {
      "date": "2024-05-16",
      "channelId": "ideco_gold",
      "asset": 2609476,
      "principal": 1794000,
      "profit": 815476,
      "profitRate": 0.45455741360089186,
      "reportedDailyChange": 3416,
      "source": "excel_import"
    },
    {
      "date": "2024-05-17",
      "channelId": "ideco_gold",
      "asset": 2623230,
      "principal": 1794000,
      "profit": 829230,
      "profitRate": 0.4622240802675585,
      "reportedDailyChange": 13754,
      "source": "excel_import"
    },
    {
      "date": "2024-05-18",
      "channelId": "ideco_gold",
      "asset": 2623230,
      "principal": 1794000,
      "profit": 829230,
      "profitRate": 0.4622240802675585,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-05-19",
      "channelId": "ideco_gold",
      "asset": 2623230,
      "principal": 1794000,
      "profit": 829230,
      "profitRate": 0.4622240802675585,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-05-20",
      "channelId": "ideco_gold",
      "asset": 2699013,
      "principal": 1794000,
      "profit": 905013,
      "profitRate": 0.5044665551839465,
      "reportedDailyChange": 75783,
      "source": "excel_import"
    },
    {
      "date": "2024-05-21",
      "channelId": "ideco_gold",
      "asset": 2676800,
      "principal": 1794000,
      "profit": 882800,
      "profitRate": 0.49208472686733556,
      "reportedDailyChange": -22213,
      "source": "excel_import"
    },
    {
      "date": "2024-05-22",
      "channelId": "ideco_gold",
      "asset": 2667462,
      "principal": 1794000,
      "profit": 873462,
      "profitRate": 0.48687959866220737,
      "reportedDailyChange": -9338,
      "source": "excel_import"
    },
    {
      "date": "2024-05-23",
      "channelId": "ideco_gold",
      "asset": 2604723,
      "principal": 1794000,
      "profit": 810723,
      "profitRate": 0.45190802675585284,
      "reportedDailyChange": -62739,
      "source": "excel_import"
    },
    {
      "date": "2024-05-24",
      "channelId": "ideco_gold",
      "asset": 2604723,
      "principal": 1794000,
      "profit": 810723,
      "profitRate": 0.45190802675585284,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-05-25",
      "channelId": "ideco_gold",
      "asset": 2604723,
      "principal": 1794000,
      "profit": 810723,
      "profitRate": 0.45190802675585284,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-05-26",
      "channelId": "ideco_gold",
      "asset": 2604723,
      "principal": 1794000,
      "profit": 810723,
      "profitRate": 0.45190802675585284,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-05-27",
      "channelId": "ideco_gold",
      "asset": 2602275,
      "principal": 1794000,
      "profit": 808275,
      "profitRate": 0.45054347826086955,
      "reportedDailyChange": -2448,
      "source": "excel_import"
    },
    {
      "date": "2024-05-28",
      "channelId": "ideco_gold",
      "asset": 2610344,
      "principal": 1794000,
      "profit": 816344,
      "profitRate": 0.455041248606466,
      "reportedDailyChange": 8069,
      "source": "excel_import"
    },
    {
      "date": "2024-05-29",
      "channelId": "ideco_gold",
      "asset": 2582329,
      "principal": 1794000,
      "profit": 788329,
      "profitRate": 0.43942530657748047,
      "reportedDailyChange": -28015,
      "source": "excel_import"
    },
    {
      "date": "2024-05-30",
      "channelId": "ideco_gold",
      "asset": 2582329,
      "principal": 1794000,
      "profit": 788329,
      "profitRate": 0.43942530657748047,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-05-31",
      "channelId": "ideco_gold",
      "asset": 2610072,
      "principal": 1794000,
      "profit": 816072,
      "profitRate": 0.45488963210702343,
      "reportedDailyChange": 27743,
      "source": "excel_import"
    },
    {
      "date": "2024-06-01",
      "channelId": "ideco_gold",
      "asset": 2610072,
      "principal": 1794000,
      "profit": 816072,
      "profitRate": 0.45488963210702343,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-06-02",
      "channelId": "ideco_gold",
      "asset": 2610072,
      "principal": 1794000,
      "profit": 816072,
      "profitRate": 0.45488963210702343,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-06-03",
      "channelId": "ideco_gold",
      "asset": 2589129,
      "principal": 1794000,
      "profit": 795129,
      "profitRate": 0.4432157190635452,
      "reportedDailyChange": -20943,
      "source": "excel_import"
    },
    {
      "date": "2024-06-04",
      "channelId": "ideco_gold",
      "asset": 2605267,
      "principal": 1794000,
      "profit": 811267,
      "profitRate": 0.452211259754738,
      "reportedDailyChange": 16138,
      "source": "excel_import"
    },
    {
      "date": "2024-06-05",
      "channelId": "ideco_gold",
      "asset": 2576254,
      "principal": 1794000,
      "profit": 782254,
      "profitRate": 0.43603901895206243,
      "reportedDailyChange": -29013,
      "source": "excel_import"
    },
    {
      "date": "2024-06-06",
      "channelId": "ideco_gold",
      "asset": 2613336,
      "principal": 1794000,
      "profit": 819336,
      "profitRate": 0.4567090301003344,
      "reportedDailyChange": 37082,
      "source": "excel_import"
    },
    {
      "date": "2024-06-07",
      "channelId": "ideco_gold",
      "asset": 2614424,
      "principal": 1794000,
      "profit": 820424,
      "profitRate": 0.4573154960981048,
      "reportedDailyChange": 1088,
      "source": "excel_import"
    },
    {
      "date": "2024-06-08",
      "channelId": "ideco_gold",
      "asset": 2614424,
      "principal": 1794000,
      "profit": 820424,
      "profitRate": 0.4573154960981048,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-06-09",
      "channelId": "ideco_gold",
      "asset": 2614424,
      "principal": 1794000,
      "profit": 820424,
      "profitRate": 0.4573154960981048,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-06-10",
      "channelId": "ideco_gold",
      "asset": 2552863,
      "principal": 1794000,
      "profit": 758863,
      "profitRate": 0.4230005574136009,
      "reportedDailyChange": -61561,
      "source": "excel_import"
    },
    {
      "date": "2024-06-11",
      "channelId": "ideco_gold",
      "asset": 2563199,
      "principal": 1794000,
      "profit": 769199,
      "profitRate": 0.4287619843924192,
      "reportedDailyChange": 10336,
      "source": "excel_import"
    },
    {
      "date": "2024-06-12",
      "channelId": "ideco_gold",
      "asset": 2563199,
      "principal": 1794000,
      "profit": 769199,
      "profitRate": 0.4287619843924192,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-06-13",
      "channelId": "ideco_gold",
      "asset": 2558575,
      "principal": 1794000,
      "profit": 764575,
      "profitRate": 0.4261845039018952,
      "reportedDailyChange": -4624,
      "source": "excel_import"
    },
    {
      "date": "2024-06-14",
      "channelId": "ideco_gold",
      "asset": 2577236,
      "principal": 1794000,
      "profit": 783236,
      "profitRate": 0.43658639910813823,
      "reportedDailyChange": 18661,
      "source": "excel_import"
    },
    {
      "date": "2024-06-15",
      "channelId": "ideco_gold",
      "asset": 2600236,
      "principal": 1817000,
      "profit": 783236,
      "profitRate": 0.43105998899284537,
      "reportedDailyChange": 23000,
      "source": "excel_import"
    },
    {
      "date": "2024-06-16",
      "channelId": "ideco_gold",
      "asset": 2600236,
      "principal": 1817000,
      "profit": 783236,
      "profitRate": 0.43105998899284537,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-06-17",
      "channelId": "ideco_gold",
      "asset": 2590631,
      "principal": 1817000,
      "profit": 773631,
      "profitRate": 0.42577380297193174,
      "reportedDailyChange": -9605,
      "source": "excel_import"
    },
    {
      "date": "2024-06-18",
      "channelId": "ideco_gold",
      "asset": 2608194,
      "principal": 1817000,
      "profit": 791194,
      "profitRate": 0.4354397358282884,
      "reportedDailyChange": 17563,
      "source": "excel_import"
    },
    {
      "date": "2024-06-19",
      "channelId": "ideco_gold",
      "asset": 2618713,
      "principal": 1817000,
      "profit": 801713,
      "profitRate": 0.44122894881673086,
      "reportedDailyChange": 10519,
      "source": "excel_import"
    },
    {
      "date": "2024-06-20",
      "channelId": "ideco_gold",
      "asset": 2676066,
      "principal": 1817000,
      "profit": 859066,
      "profitRate": 0.4727936158503027,
      "reportedDailyChange": 57353,
      "source": "excel_import"
    },
    {
      "date": "2024-06-21",
      "channelId": "ideco_gold",
      "asset": 2676066,
      "principal": 1817000,
      "profit": 859066,
      "profitRate": 0.4727936158503027,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-06-22",
      "channelId": "ideco_gold",
      "asset": 2676066,
      "principal": 1817000,
      "profit": 859066,
      "profitRate": 0.4727936158503027,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-06-23",
      "channelId": "ideco_gold",
      "asset": 2676066,
      "principal": 1817000,
      "profit": 859066,
      "profitRate": 0.4727936158503027,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-06-24",
      "channelId": "ideco_gold",
      "asset": 2647802,
      "principal": 1817000,
      "profit": 830802,
      "profitRate": 0.45723830489818384,
      "reportedDailyChange": -28264,
      "source": "excel_import"
    },
    {
      "date": "2024-06-25",
      "channelId": "ideco_gold",
      "asset": 2644234,
      "principal": 1817000,
      "profit": 827234,
      "profitRate": 0.45527462850853057,
      "reportedDailyChange": -3568,
      "source": "excel_import"
    },
    {
      "date": "2024-06-26",
      "channelId": "ideco_gold",
      "asset": 2638380,
      "principal": 1817000,
      "profit": 821380,
      "profitRate": 0.4520528343423225,
      "reportedDailyChange": -5854,
      "source": "excel_import"
    },
    {
      "date": "2024-06-27",
      "channelId": "ideco_gold",
      "asset": 2628867,
      "principal": 1817000,
      "profit": 811867,
      "profitRate": 0.44681728123280134,
      "reportedDailyChange": -9513,
      "source": "excel_import"
    },
    {
      "date": "2024-06-28",
      "channelId": "ideco_gold",
      "asset": 2663992,
      "principal": 1817000,
      "profit": 846992,
      "profitRate": 0.46614859658778207,
      "reportedDailyChange": 35125,
      "source": "excel_import"
    },
    {
      "date": "2024-06-29",
      "channelId": "ideco_gold",
      "asset": 2663992,
      "principal": 1817000,
      "profit": 846992,
      "profitRate": 0.46614859658778207,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-06-30",
      "channelId": "ideco_gold",
      "asset": 2663992,
      "principal": 1817000,
      "profit": 846992,
      "profitRate": 0.46614859658778207,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-07-01",
      "channelId": "ideco_gold",
      "asset": 2667377,
      "principal": 1817000,
      "profit": 850377,
      "profitRate": 0.46801155751238305,
      "reportedDailyChange": 3385,
      "source": "excel_import"
    },
    {
      "date": "2024-07-02",
      "channelId": "ideco_gold",
      "asset": 2691891,
      "principal": 1817000,
      "profit": 874891,
      "profitRate": 0.4815030269675289,
      "reportedDailyChange": 24514,
      "source": "excel_import"
    },
    {
      "date": "2024-07-03",
      "channelId": "ideco_gold",
      "asset": 2691891,
      "principal": 1817000,
      "profit": 874891,
      "profitRate": 0.4815030269675289,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-07-04",
      "channelId": "ideco_gold",
      "asset": 2712930,
      "principal": 1817000,
      "profit": 895930,
      "profitRate": 0.4930820033021464,
      "reportedDailyChange": 21039,
      "source": "excel_import"
    },
    {
      "date": "2024-07-05",
      "channelId": "ideco_gold",
      "asset": 2709362,
      "principal": 1817000,
      "profit": 892362,
      "profitRate": 0.49111832691249313,
      "reportedDailyChange": -3568,
      "source": "excel_import"
    },
    {
      "date": "2024-07-06",
      "channelId": "ideco_gold",
      "asset": 2729120,
      "principal": 1817000,
      "profit": 912120,
      "profitRate": 0.5019922949917446,
      "reportedDailyChange": 19758,
      "source": "excel_import"
    },
    {
      "date": "2024-07-07",
      "channelId": "ideco_gold",
      "asset": 2786204,
      "principal": 1817000,
      "profit": 969204,
      "profitRate": 0.533408915795267,
      "reportedDailyChange": 57084,
      "source": "excel_import"
    },
    {
      "date": "2024-07-08",
      "channelId": "ideco_gold",
      "asset": 2724364,
      "principal": 1817000,
      "profit": 907364,
      "profitRate": 0.4993747936158503,
      "reportedDailyChange": -61840,
      "source": "excel_import"
    },
    {
      "date": "2024-07-09",
      "channelId": "ideco_gold",
      "asset": 2745402,
      "principal": 1817000,
      "profit": 928402,
      "profitRate": 0.5109532195927353,
      "reportedDailyChange": 21038,
      "source": "excel_import"
    },
    {
      "date": "2024-07-10",
      "channelId": "ideco_gold",
      "asset": 2726651,
      "principal": 1817000,
      "profit": 909651,
      "profitRate": 0.5006334617501376,
      "reportedDailyChange": -18751,
      "source": "excel_import"
    },
    {
      "date": "2024-07-11",
      "channelId": "ideco_gold",
      "asset": 2726651,
      "principal": 1817000,
      "profit": 909651,
      "profitRate": 0.5006334617501376,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-07-12",
      "channelId": "ideco_gold",
      "asset": 2726651,
      "principal": 1817000,
      "profit": 909651,
      "profitRate": 0.5006334617501376,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-07-13",
      "channelId": "ideco_gold",
      "asset": 2726651,
      "principal": 1817000,
      "profit": 909651,
      "profitRate": 0.5006334617501376,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-07-14",
      "channelId": "ideco_gold",
      "asset": 2726651,
      "principal": 1817000,
      "profit": 909651,
      "profitRate": 0.5006334617501376,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-07-15",
      "channelId": "ideco_gold",
      "asset": 2749651,
      "principal": 1840000,
      "profit": 909651,
      "profitRate": 0.49437554347826085,
      "reportedDailyChange": 23000,
      "source": "excel_import"
    },
    {
      "date": "2024-07-16",
      "channelId": "ideco_gold",
      "asset": 2771695,
      "principal": 1840000,
      "profit": 931695,
      "profitRate": 0.5063559782608695,
      "reportedDailyChange": 22044,
      "source": "excel_import"
    },
    {
      "date": "2024-07-17",
      "channelId": "ideco_gold",
      "asset": 2792724,
      "principal": 1840000,
      "profit": 952724,
      "profitRate": 0.5177847826086956,
      "reportedDailyChange": 21029,
      "source": "excel_import"
    },
    {
      "date": "2024-07-18",
      "channelId": "ideco_gold",
      "asset": 2767913,
      "principal": 1840000,
      "profit": 927913,
      "profitRate": 0.5043005434782609,
      "reportedDailyChange": -24811,
      "source": "excel_import"
    },
    {
      "date": "2024-07-19",
      "channelId": "ideco_gold",
      "asset": 2745409,
      "principal": 1840000,
      "profit": 905409,
      "profitRate": 0.49207010869565215,
      "reportedDailyChange": -22504,
      "source": "excel_import"
    },
    {
      "date": "2024-07-20",
      "channelId": "ideco_gold",
      "asset": 2745409,
      "principal": 1840000,
      "profit": 905409,
      "profitRate": 0.49207010869565215,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-07-21",
      "channelId": "ideco_gold",
      "asset": 2745409,
      "principal": 1840000,
      "profit": 905409,
      "profitRate": 0.49207010869565215,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-07-22",
      "channelId": "ideco_gold",
      "asset": 2711098,
      "principal": 1840000,
      "profit": 871098,
      "profitRate": 0.4734228260869565,
      "reportedDailyChange": -34311,
      "source": "excel_import"
    },
    {
      "date": "2024-07-23",
      "channelId": "ideco_gold",
      "asset": 2676788,
      "principal": 1840000,
      "profit": 836788,
      "profitRate": 0.4547760869565217,
      "reportedDailyChange": -34310,
      "source": "excel_import"
    },
    {
      "date": "2024-07-24",
      "channelId": "ideco_gold",
      "asset": 2676788,
      "principal": 1840000,
      "profit": 836788,
      "profitRate": 0.4547760869565217,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-07-25",
      "channelId": "ideco_gold",
      "asset": 2640080,
      "principal": 1840000,
      "profit": 800080,
      "profitRate": 0.43482608695652175,
      "reportedDailyChange": -36708,
      "source": "excel_import"
    },
    {
      "date": "2024-07-26",
      "channelId": "ideco_gold",
      "asset": 2640080,
      "principal": 1840000,
      "profit": 800080,
      "profitRate": 0.43482608695652175,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-07-27",
      "channelId": "ideco_gold",
      "asset": 2640080,
      "principal": 1840000,
      "profit": 800080,
      "profitRate": 0.43482608695652175,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-07-28",
      "channelId": "ideco_gold",
      "asset": 2640080,
      "principal": 1840000,
      "profit": 800080,
      "profitRate": 0.43482608695652175,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-07-29",
      "channelId": "ideco_gold",
      "asset": 2640080,
      "principal": 1840000,
      "profit": 800080,
      "profitRate": 0.43482608695652175,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-07-30",
      "channelId": "ideco_gold",
      "asset": 2649488,
      "principal": 1840000,
      "profit": 809488,
      "profitRate": 0.4399391304347826,
      "reportedDailyChange": 9408,
      "source": "excel_import"
    },
    {
      "date": "2024-07-31",
      "channelId": "ideco_gold",
      "asset": 2654192,
      "principal": 1840000,
      "profit": 814192,
      "profitRate": 0.44249565217391307,
      "reportedDailyChange": 4704,
      "source": "excel_import"
    },
    {
      "date": "2024-08-01",
      "channelId": "ideco_gold",
      "asset": 2629473,
      "principal": 1840000,
      "profit": 789473,
      "profitRate": 0.4290614130434783,
      "reportedDailyChange": -24719,
      "source": "excel_import"
    },
    {
      "date": "2024-08-02",
      "channelId": "ideco_gold",
      "asset": 2636483,
      "principal": 1840000,
      "profit": 796483,
      "profitRate": 0.4328711956521739,
      "reportedDailyChange": 7010,
      "source": "excel_import"
    },
    {
      "date": "2024-08-03",
      "channelId": "ideco_gold",
      "asset": 2636483,
      "principal": 1840000,
      "profit": 796483,
      "profitRate": 0.4328711956521739,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-08-04",
      "channelId": "ideco_gold",
      "asset": 2636483,
      "principal": 1840000,
      "profit": 796483,
      "profitRate": 0.4328711956521739,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-08-05",
      "channelId": "ideco_gold",
      "asset": 2499611,
      "principal": 1840000,
      "profit": 659611,
      "profitRate": 0.35848423913043476,
      "reportedDailyChange": -136872,
      "source": "excel_import"
    },
    {
      "date": "2024-08-06",
      "channelId": "ideco_gold",
      "asset": 2499611,
      "principal": 1840000,
      "profit": 659611,
      "profitRate": 0.35848423913043476,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-08-07",
      "channelId": "ideco_gold",
      "asset": 2517320,
      "principal": 1840000,
      "profit": 677320,
      "profitRate": 0.3681086956521739,
      "reportedDailyChange": 17709,
      "source": "excel_import"
    },
    {
      "date": "2024-08-08",
      "channelId": "ideco_gold",
      "asset": 2513723,
      "principal": 1840000,
      "profit": 673723,
      "profitRate": 0.3661538043478261,
      "reportedDailyChange": -3597,
      "source": "excel_import"
    },
    {
      "date": "2024-08-09",
      "channelId": "ideco_gold",
      "asset": 2548863,
      "principal": 1840000,
      "profit": 708863,
      "profitRate": 0.3852516304347826,
      "reportedDailyChange": 35140,
      "source": "excel_import"
    },
    {
      "date": "2024-08-10",
      "channelId": "ideco_gold",
      "asset": 2594241,
      "principal": 1840000,
      "profit": 754241,
      "profitRate": 0.40991358695652175,
      "reportedDailyChange": 45378,
      "source": "excel_import"
    },
    {
      "date": "2024-08-11",
      "channelId": "ideco_gold",
      "asset": 2594241,
      "principal": 1840000,
      "profit": 754241,
      "profitRate": 0.40991358695652175,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-08-12",
      "channelId": "ideco_gold",
      "asset": 2594241,
      "principal": 1840000,
      "profit": 754241,
      "profitRate": 0.40991358695652175,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-08-13",
      "channelId": "ideco_gold",
      "asset": 2594241,
      "principal": 1840000,
      "profit": 754241,
      "profitRate": 0.40991358695652175,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-08-14",
      "channelId": "ideco_gold",
      "asset": 2594241,
      "principal": 1840000,
      "profit": 754241,
      "profitRate": 0.40991358695652175,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-08-15",
      "channelId": "ideco_gold",
      "asset": 2669605,
      "principal": 1886000,
      "profit": 783605,
      "profitRate": 0.4154851537645811,
      "reportedDailyChange": 75364,
      "source": "excel_import"
    },
    {
      "date": "2024-08-16",
      "channelId": "ideco_gold",
      "asset": 2669605,
      "principal": 1886000,
      "profit": 783605,
      "profitRate": 0.4154851537645811,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-08-17",
      "channelId": "ideco_gold",
      "asset": 2669605,
      "principal": 1886000,
      "profit": 783605,
      "profitRate": 0.4154851537645811,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-08-18",
      "channelId": "ideco_gold",
      "asset": 2669605,
      "principal": 1886000,
      "profit": 783605,
      "profitRate": 0.4154851537645811,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-08-19",
      "channelId": "ideco_gold",
      "asset": 2658718,
      "principal": 1886000,
      "profit": 772718,
      "profitRate": 0.40971261930010605,
      "reportedDailyChange": -10887,
      "source": "excel_import"
    },
    {
      "date": "2024-08-20",
      "channelId": "ideco_gold",
      "asset": 2684957,
      "principal": 1886000,
      "profit": 798957,
      "profitRate": 0.42362513255567336,
      "reportedDailyChange": 26239,
      "source": "excel_import"
    },
    {
      "date": "2024-08-21",
      "channelId": "ideco_gold",
      "asset": 2674164,
      "principal": 1886000,
      "profit": 788164,
      "profitRate": 0.4179024390243902,
      "reportedDailyChange": -10793,
      "source": "excel_import"
    },
    {
      "date": "2024-08-22",
      "channelId": "ideco_gold",
      "asset": 2647925,
      "principal": 1886000,
      "profit": 761925,
      "profitRate": 0.4039899257688229,
      "reportedDailyChange": -26239,
      "source": "excel_import"
    },
    {
      "date": "2024-08-23",
      "channelId": "ideco_gold",
      "asset": 2647925,
      "principal": 1886000,
      "profit": 761925,
      "profitRate": 0.4039899257688229,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-08-24",
      "channelId": "ideco_gold",
      "asset": 2647925,
      "principal": 1886000,
      "profit": 761925,
      "profitRate": 0.4039899257688229,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-08-25",
      "channelId": "ideco_gold",
      "asset": 2647925,
      "principal": 1886000,
      "profit": 761925,
      "profitRate": 0.4039899257688229,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-08-26",
      "channelId": "ideco_gold",
      "asset": 2637039,
      "principal": 1886000,
      "profit": 751039,
      "profitRate": 0.39821792152704133,
      "reportedDailyChange": -10886,
      "source": "excel_import"
    },
    {
      "date": "2024-08-27",
      "channelId": "ideco_gold",
      "asset": 2656020,
      "principal": 1886000,
      "profit": 770020,
      "profitRate": 0.40828207847295866,
      "reportedDailyChange": 18981,
      "source": "excel_import"
    },
    {
      "date": "2024-08-28",
      "channelId": "ideco_gold",
      "asset": 2654717,
      "principal": 1886000,
      "profit": 768717,
      "profitRate": 0.4075911983032874,
      "reportedDailyChange": -1303,
      "source": "excel_import"
    },
    {
      "date": "2024-08-29",
      "channelId": "ideco_gold",
      "asset": 2659370,
      "principal": 1886000,
      "profit": 773370,
      "profitRate": 0.41005832449628843,
      "reportedDailyChange": 4653,
      "source": "excel_import"
    },
    {
      "date": "2024-08-30",
      "channelId": "ideco_gold",
      "asset": 2659370,
      "principal": 1886000,
      "profit": 773370,
      "profitRate": 0.41005832449628843,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-08-31",
      "channelId": "ideco_gold",
      "asset": 2659370,
      "principal": 1886000,
      "profit": 773370,
      "profitRate": 0.41005832449628843,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-09-01",
      "channelId": "ideco_gold",
      "asset": 2659370,
      "principal": 1886000,
      "profit": 773370,
      "profitRate": 0.41005832449628843,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-09-02",
      "channelId": "ideco_gold",
      "asset": 2659370,
      "principal": 1886000,
      "profit": 773370,
      "profitRate": 0.41005832449628843,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-09-03",
      "channelId": "ideco_gold",
      "asset": 2665231,
      "principal": 1886000,
      "profit": 779231,
      "profitRate": 0.4131659597030753,
      "reportedDailyChange": 5861,
      "source": "excel_import"
    },
    {
      "date": "2024-09-04",
      "channelId": "ideco_gold",
      "asset": 2641412,
      "principal": 1886000,
      "profit": 755412,
      "profitRate": 0.4005365853658537,
      "reportedDailyChange": -23819,
      "source": "excel_import"
    },
    {
      "date": "2024-09-05",
      "channelId": "ideco_gold",
      "asset": 2615173,
      "principal": 1886000,
      "profit": 729173,
      "profitRate": 0.3866240721102863,
      "reportedDailyChange": -26239,
      "source": "excel_import"
    },
    {
      "date": "2024-09-06",
      "channelId": "ideco_gold",
      "asset": 2616383,
      "principal": 1886000,
      "profit": 730383,
      "profitRate": 0.3872656415694592,
      "reportedDailyChange": 1210,
      "source": "excel_import"
    },
    {
      "date": "2024-09-07",
      "channelId": "ideco_gold",
      "asset": 2616383,
      "principal": 1886000,
      "profit": 730383,
      "profitRate": 0.3872656415694592,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-09-08",
      "channelId": "ideco_gold",
      "asset": 2616383,
      "principal": 1886000,
      "profit": 730383,
      "profitRate": 0.3872656415694592,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-09-09",
      "channelId": "ideco_gold",
      "asset": 2612661,
      "principal": 1886000,
      "profit": 726661,
      "profitRate": 0.38529215270413575,
      "reportedDailyChange": -3722,
      "source": "excel_import"
    },
    {
      "date": "2024-09-10",
      "channelId": "ideco_gold",
      "asset": 2612661,
      "principal": 1886000,
      "profit": 726661,
      "profitRate": 0.38529215270413575,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-09-11",
      "channelId": "ideco_gold",
      "asset": 2595913,
      "principal": 1886000,
      "profit": 709913,
      "profitRate": 0.3764119830328738,
      "reportedDailyChange": -16748,
      "source": "excel_import"
    },
    {
      "date": "2024-09-12",
      "channelId": "ideco_gold",
      "asset": 2624478,
      "principal": 1886000,
      "profit": 738478,
      "profitRate": 0.3915577942735949,
      "reportedDailyChange": 28565,
      "source": "excel_import"
    },
    {
      "date": "2024-09-13",
      "channelId": "ideco_gold",
      "asset": 2635178,
      "principal": 1886000,
      "profit": 749178,
      "profitRate": 0.39723117709437966,
      "reportedDailyChange": 10700,
      "source": "excel_import"
    },
    {
      "date": "2024-09-14",
      "channelId": "ideco_gold",
      "asset": 2635178,
      "principal": 1886000,
      "profit": 749178,
      "profitRate": 0.39723117709437966,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-09-15",
      "channelId": "ideco_gold",
      "asset": 2635178,
      "principal": 1886000,
      "profit": 749178,
      "profitRate": 0.39723117709437966,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-09-16",
      "channelId": "ideco_gold",
      "asset": 2635178,
      "principal": 1886000,
      "profit": 749178,
      "profitRate": 0.39723117709437966,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-09-17",
      "channelId": "ideco_gold",
      "asset": 2643344,
      "principal": 1886000,
      "profit": 757344,
      "profitRate": 0.4015609756097561,
      "reportedDailyChange": 8166,
      "source": "excel_import"
    },
    {
      "date": "2024-09-18",
      "channelId": "ideco_gold",
      "asset": 2650571,
      "principal": 1886000,
      "profit": 764571,
      "profitRate": 0.4053928950159067,
      "reportedDailyChange": 7227,
      "source": "excel_import"
    },
    {
      "date": "2024-09-19",
      "channelId": "ideco_gold",
      "asset": 2674506,
      "principal": 1886000,
      "profit": 788506,
      "profitRate": 0.41808377518557793,
      "reportedDailyChange": 23935,
      "source": "excel_import"
    },
    {
      "date": "2024-09-20",
      "channelId": "ideco_gold",
      "asset": 2691213,
      "principal": 1886000,
      "profit": 805213,
      "profitRate": 0.42694220572640507,
      "reportedDailyChange": 16707,
      "source": "excel_import"
    },
    {
      "date": "2024-09-21",
      "channelId": "ideco_gold",
      "asset": 2691213,
      "principal": 1886000,
      "profit": 805213,
      "profitRate": 0.42694220572640507,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-09-22",
      "channelId": "ideco_gold",
      "asset": 2691213,
      "principal": 1886000,
      "profit": 805213,
      "profitRate": 0.42694220572640507,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-09-23",
      "channelId": "ideco_gold",
      "asset": 2691213,
      "principal": 1886000,
      "profit": 805213,
      "profitRate": 0.42694220572640507,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-09-24",
      "channelId": "ideco_gold",
      "asset": 2773811,
      "principal": 1886000,
      "profit": 887811,
      "profitRate": 0.470737539766702,
      "reportedDailyChange": 82598,
      "source": "excel_import"
    },
    {
      "date": "2024-09-25",
      "channelId": "ideco_gold",
      "asset": 2773811,
      "principal": 1886000,
      "profit": 887811,
      "profitRate": 0.470737539766702,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-09-26",
      "channelId": "ideco_gold",
      "asset": 2806193,
      "principal": 1886000,
      "profit": 920193,
      "profitRate": 0.48790721102863205,
      "reportedDailyChange": 32382,
      "source": "excel_import"
    },
    {
      "date": "2024-09-27",
      "channelId": "ideco_gold",
      "asset": 2837262,
      "principal": 1886000,
      "profit": 951262,
      "profitRate": 0.5043806998939555,
      "reportedDailyChange": 31069,
      "source": "excel_import"
    },
    {
      "date": "2024-09-28",
      "channelId": "ideco_gold",
      "asset": 2837262,
      "principal": 1886000,
      "profit": 951262,
      "profitRate": 0.5043806998939555,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-09-29",
      "channelId": "ideco_gold",
      "asset": 2837262,
      "principal": 1886000,
      "profit": 951262,
      "profitRate": 0.5043806998939555,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-09-30",
      "channelId": "ideco_gold",
      "asset": 2744714,
      "principal": 1886000,
      "profit": 858714,
      "profitRate": 0.45530965005302226,
      "reportedDailyChange": -92548,
      "source": "excel_import"
    },
    {
      "date": "2024-10-01",
      "channelId": "ideco_gold",
      "asset": 2778223,
      "principal": 1886000,
      "profit": 892223,
      "profitRate": 0.47307688229056205,
      "reportedDailyChange": 33509,
      "source": "excel_import"
    },
    {
      "date": "2024-10-02",
      "channelId": "ideco_gold",
      "asset": 2775782,
      "principal": 1886000,
      "profit": 889782,
      "profitRate": 0.4717826086956522,
      "reportedDailyChange": -2441,
      "source": "excel_import"
    },
    {
      "date": "2024-10-03",
      "channelId": "ideco_gold",
      "asset": 2830879,
      "principal": 1886000,
      "profit": 944879,
      "profitRate": 0.5009962884411453,
      "reportedDailyChange": 55097,
      "source": "excel_import"
    },
    {
      "date": "2024-10-04",
      "channelId": "ideco_gold",
      "asset": 2839233,
      "principal": 1886000,
      "profit": 953233,
      "profitRate": 0.5054257688229056,
      "reportedDailyChange": 8354,
      "source": "excel_import"
    },
    {
      "date": "2024-10-05",
      "channelId": "ideco_gold",
      "asset": 2839233,
      "principal": 1886000,
      "profit": 953233,
      "profitRate": 0.5054257688229056,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-10-06",
      "channelId": "ideco_gold",
      "asset": 2839233,
      "principal": 1886000,
      "profit": 953233,
      "profitRate": 0.5054257688229056,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-10-07",
      "channelId": "ideco_gold",
      "asset": 2849933,
      "principal": 1886000,
      "profit": 963933,
      "profitRate": 0.5110991516436904,
      "reportedDailyChange": 10700,
      "source": "excel_import"
    },
    {
      "date": "2024-10-08",
      "channelId": "ideco_gold",
      "asset": 2845052,
      "principal": 1886000,
      "profit": 959052,
      "profitRate": 0.5085111346765642,
      "reportedDailyChange": -4881,
      "source": "excel_import"
    },
    {
      "date": "2024-10-09",
      "channelId": "ideco_gold",
      "asset": 2833038,
      "principal": 1886000,
      "profit": 947038,
      "profitRate": 0.5021410392364793,
      "reportedDailyChange": -12014,
      "source": "excel_import"
    },
    {
      "date": "2024-10-10",
      "channelId": "ideco_gold",
      "asset": 2841392,
      "principal": 1886000,
      "profit": 955392,
      "profitRate": 0.5065705196182396,
      "reportedDailyChange": 8354,
      "source": "excel_import"
    },
    {
      "date": "2024-10-11",
      "channelId": "ideco_gold",
      "asset": 2866546,
      "principal": 1886000,
      "profit": 980546,
      "profitRate": 0.5199077412513256,
      "reportedDailyChange": 25154,
      "source": "excel_import"
    },
    {
      "date": "2024-10-12",
      "channelId": "ideco_gold",
      "asset": 2866546,
      "principal": 1886000,
      "profit": 980546,
      "profitRate": 0.5199077412513256,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-10-13",
      "channelId": "ideco_gold",
      "asset": 2866546,
      "principal": 1886000,
      "profit": 980546,
      "profitRate": 0.5199077412513256,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-10-14",
      "channelId": "ideco_gold",
      "asset": 2866546,
      "principal": 1886000,
      "profit": 980546,
      "profitRate": 0.5199077412513256,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-10-15",
      "channelId": "ideco_gold",
      "asset": 2925308,
      "principal": 1909000,
      "profit": 1016308,
      "profitRate": 0.5323771608171818,
      "reportedDailyChange": 58762,
      "source": "excel_import"
    },
    {
      "date": "2024-10-16",
      "channelId": "ideco_gold",
      "asset": 2925308,
      "principal": 1909000,
      "profit": 1016308,
      "profitRate": 0.5323771608171818,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-10-17",
      "channelId": "ideco_gold",
      "asset": 2987934,
      "principal": 1909000,
      "profit": 1078934,
      "profitRate": 0.5651828182294395,
      "reportedDailyChange": 62626,
      "source": "excel_import"
    },
    {
      "date": "2024-10-18",
      "channelId": "ideco_gold",
      "asset": 2987934,
      "principal": 1909000,
      "profit": 1078934,
      "profitRate": 0.5651828182294395,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-10-19",
      "channelId": "ideco_gold",
      "asset": 2987934,
      "principal": 1909000,
      "profit": 1078934,
      "profitRate": 0.5651828182294395,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-10-20",
      "channelId": "ideco_gold",
      "asset": 2987934,
      "principal": 1909000,
      "profit": 1078934,
      "profitRate": 0.5651828182294395,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-10-21",
      "channelId": "ideco_gold",
      "asset": 2987934,
      "principal": 1909000,
      "profit": 1078934,
      "profitRate": 0.5651828182294395,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-10-22",
      "channelId": "ideco_gold",
      "asset": 3025396,
      "principal": 1909000,
      "profit": 1116396,
      "profitRate": 0.5848067050811944,
      "reportedDailyChange": 37462,
      "source": "excel_import"
    },
    {
      "date": "2024-10-23",
      "channelId": "ideco_gold",
      "asset": 3074966,
      "principal": 1909000,
      "profit": 1165966,
      "profitRate": 0.6107731796752226,
      "reportedDailyChange": 49570,
      "source": "excel_import"
    },
    {
      "date": "2024-10-24",
      "channelId": "ideco_gold",
      "asset": 3043464,
      "principal": 1909000,
      "profit": 1134464,
      "profitRate": 0.5942713462545836,
      "reportedDailyChange": -31502,
      "source": "excel_import"
    },
    {
      "date": "2024-10-25",
      "channelId": "ideco_gold",
      "asset": 3083196,
      "principal": 1909000,
      "profit": 1174196,
      "profitRate": 0.6150843373493976,
      "reportedDailyChange": 39732,
      "source": "excel_import"
    },
    {
      "date": "2024-10-26",
      "channelId": "ideco_gold",
      "asset": 3083196,
      "principal": 1909000,
      "profit": 1174196,
      "profitRate": 0.6150843373493976,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-10-27",
      "channelId": "ideco_gold",
      "asset": 3083196,
      "principal": 1909000,
      "profit": 1174196,
      "profitRate": 0.6150843373493976,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-10-28",
      "channelId": "ideco_gold",
      "asset": 3083196,
      "principal": 1909000,
      "profit": 1174196,
      "profitRate": 0.6150843373493976,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-10-29",
      "channelId": "ideco_gold",
      "asset": 3132577,
      "principal": 1909000,
      "profit": 1223577,
      "profitRate": 0.6409518072289156,
      "reportedDailyChange": 49381,
      "source": "excel_import"
    },
    {
      "date": "2024-10-30",
      "channelId": "ideco_gold",
      "asset": 3132577,
      "principal": 1909000,
      "profit": 1223577,
      "profitRate": 0.6409518072289156,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-10-31",
      "channelId": "ideco_gold",
      "asset": 3130118,
      "principal": 1909000,
      "profit": 1221118,
      "profitRate": 0.6396636982713463,
      "reportedDailyChange": -2459,
      "source": "excel_import"
    },
    {
      "date": "2024-11-01",
      "channelId": "ideco_gold",
      "asset": 3058600,
      "principal": 1909000,
      "profit": 1149600,
      "profitRate": 0.6022001047668937,
      "reportedDailyChange": -71518,
      "source": "excel_import"
    },
    {
      "date": "2024-11-02",
      "channelId": "ideco_gold",
      "asset": 3058600,
      "principal": 1909000,
      "profit": 1149600,
      "profitRate": 0.6022001047668937,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-11-03",
      "channelId": "ideco_gold",
      "asset": 3058600,
      "principal": 1909000,
      "profit": 1149600,
      "profitRate": 0.6022001047668937,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-11-04",
      "channelId": "ideco_gold",
      "asset": 3058600,
      "principal": 1909000,
      "profit": 1149600,
      "profitRate": 0.6022001047668937,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-11-05",
      "channelId": "ideco_gold",
      "asset": 3058600,
      "principal": 1909000,
      "profit": 1149600,
      "profitRate": 0.6022001047668937,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-11-06",
      "channelId": "ideco_gold",
      "asset": 2999475,
      "principal": 1909000,
      "profit": 1090475,
      "profitRate": 0.5712283918281823,
      "reportedDailyChange": -59125,
      "source": "excel_import"
    },
    {
      "date": "2024-11-07",
      "channelId": "ideco_gold",
      "asset": 3010165,
      "principal": 1909000,
      "profit": 1101165,
      "profitRate": 0.5768281822943949,
      "reportedDailyChange": 10690,
      "source": "excel_import"
    },
    {
      "date": "2024-11-08",
      "channelId": "ideco_gold",
      "asset": 3010165,
      "principal": 1909000,
      "profit": 1101165,
      "profitRate": 0.5768281822943949,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-11-09",
      "channelId": "ideco_gold",
      "asset": 3010165,
      "principal": 1909000,
      "profit": 1101165,
      "profitRate": 0.5768281822943949,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-11-10",
      "channelId": "ideco_gold",
      "asset": 3010165,
      "principal": 1909000,
      "profit": 1101165,
      "profitRate": 0.5768281822943949,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-11-11",
      "channelId": "ideco_gold",
      "asset": 3010165,
      "principal": 1909000,
      "profit": 1101165,
      "profitRate": 0.5768281822943949,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-11-12",
      "channelId": "ideco_gold",
      "asset": 2932688,
      "principal": 1909000,
      "profit": 1023688,
      "profitRate": 0.536243059193295,
      "reportedDailyChange": -77477,
      "source": "excel_import"
    },
    {
      "date": "2024-11-13",
      "channelId": "ideco_gold",
      "asset": 2967501,
      "principal": 1909000,
      "profit": 1058501,
      "profitRate": 0.5544793085385018,
      "reportedDailyChange": 34813,
      "source": "excel_import"
    },
    {
      "date": "2024-11-14",
      "channelId": "ideco_gold",
      "asset": 2926350,
      "principal": 1909000,
      "profit": 1017350,
      "profitRate": 0.5329229963331588,
      "reportedDailyChange": -41151,
      "source": "excel_import"
    },
    {
      "date": "2024-11-15",
      "channelId": "ideco_gold",
      "asset": 2946719,
      "principal": 1932000,
      "profit": 1014719,
      "profitRate": 0.5252168737060041,
      "reportedDailyChange": 20369,
      "source": "excel_import"
    },
    {
      "date": "2024-11-16",
      "channelId": "ideco_gold",
      "asset": 2946719,
      "principal": 1932000,
      "profit": 1014719,
      "profitRate": 0.5252168737060041,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-11-17",
      "channelId": "ideco_gold",
      "asset": 2946719,
      "principal": 1932000,
      "profit": 1014719,
      "profitRate": 0.5252168737060041,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-11-18",
      "channelId": "ideco_gold",
      "asset": 2956348,
      "principal": 1932000,
      "profit": 1024348,
      "profitRate": 0.5302008281573499,
      "reportedDailyChange": 9629,
      "source": "excel_import"
    },
    {
      "date": "2024-11-19",
      "channelId": "ideco_gold",
      "asset": 3021941,
      "principal": 1932000,
      "profit": 1089941,
      "profitRate": 0.5641516563146998,
      "reportedDailyChange": 65593,
      "source": "excel_import"
    },
    {
      "date": "2024-11-20",
      "channelId": "ideco_gold",
      "asset": 3021941,
      "principal": 1932000,
      "profit": 1089941,
      "profitRate": 0.5641516563146998,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-11-21",
      "channelId": "ideco_gold",
      "asset": 3044917,
      "principal": 1932000,
      "profit": 1112917,
      "profitRate": 0.5760439958592133,
      "reportedDailyChange": 22976,
      "source": "excel_import"
    },
    {
      "date": "2024-11-22",
      "channelId": "ideco_gold",
      "asset": 3076570,
      "principal": 1932000,
      "profit": 1144570,
      "profitRate": 0.592427536231884,
      "reportedDailyChange": 31653,
      "source": "excel_import"
    },
    {
      "date": "2024-11-23",
      "channelId": "ideco_gold",
      "asset": 3076570,
      "principal": 1932000,
      "profit": 1144570,
      "profitRate": 0.592427536231884,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-11-24",
      "channelId": "ideco_gold",
      "asset": 3076570,
      "principal": 1932000,
      "profit": 1144570,
      "profitRate": 0.592427536231884,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-11-25",
      "channelId": "ideco_gold",
      "asset": 3039864,
      "principal": 1932000,
      "profit": 1107864,
      "profitRate": 0.5734285714285714,
      "reportedDailyChange": -36706,
      "source": "excel_import"
    },
    {
      "date": "2024-11-26",
      "channelId": "ideco_gold",
      "asset": 2980278,
      "principal": 1932000,
      "profit": 1048278,
      "profitRate": 0.5425869565217392,
      "reportedDailyChange": -59586,
      "source": "excel_import"
    },
    {
      "date": "2024-11-27",
      "channelId": "ideco_gold",
      "asset": 2972937,
      "principal": 1932000,
      "profit": 1040937,
      "profitRate": 0.5387872670807453,
      "reportedDailyChange": -7341,
      "source": "excel_import"
    },
    {
      "date": "2024-11-28",
      "channelId": "ideco_gold",
      "asset": 2953392,
      "principal": 1932000,
      "profit": 1021392,
      "profitRate": 0.5286708074534161,
      "reportedDailyChange": -19545,
      "source": "excel_import"
    },
    {
      "date": "2024-11-29",
      "channelId": "ideco_gold",
      "asset": 2950914,
      "principal": 1932000,
      "profit": 1018914,
      "profitRate": 0.527388198757764,
      "reportedDailyChange": -2478,
      "source": "excel_import"
    },
    {
      "date": "2024-11-30",
      "channelId": "ideco_gold",
      "asset": 2950914,
      "principal": 1932000,
      "profit": 1018914,
      "profitRate": 0.527388198757764,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-12-01",
      "channelId": "ideco_gold",
      "asset": 2950914,
      "principal": 1932000,
      "profit": 1018914,
      "profitRate": 0.527388198757764,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-12-02",
      "channelId": "ideco_gold",
      "asset": 2920405,
      "principal": 1932000,
      "profit": 988405,
      "profitRate": 0.5115967908902691,
      "reportedDailyChange": -30509,
      "source": "excel_import"
    },
    {
      "date": "2024-12-03",
      "channelId": "ideco_gold",
      "asset": 2937376,
      "principal": 1932000,
      "profit": 1005376,
      "profitRate": 0.5203809523809524,
      "reportedDailyChange": 16971,
      "source": "excel_import"
    },
    {
      "date": "2024-12-04",
      "channelId": "ideco_gold",
      "asset": 2932513,
      "principal": 1932000,
      "profit": 1000513,
      "profitRate": 0.5178638716356108,
      "reportedDailyChange": -4863,
      "source": "excel_import"
    },
    {
      "date": "2024-12-05",
      "channelId": "ideco_gold",
      "asset": 2936136,
      "principal": 1932000,
      "profit": 1004136,
      "profitRate": 0.5197391304347826,
      "reportedDailyChange": 3623,
      "source": "excel_import"
    },
    {
      "date": "2024-12-06",
      "channelId": "ideco_gold",
      "asset": 2920119,
      "principal": 1932000,
      "profit": 988119,
      "profitRate": 0.5114487577639751,
      "reportedDailyChange": -16017,
      "source": "excel_import"
    },
    {
      "date": "2024-12-07",
      "channelId": "ideco_gold",
      "asset": 2920119,
      "principal": 1932000,
      "profit": 988119,
      "profitRate": 0.5114487577639751,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-12-08",
      "channelId": "ideco_gold",
      "asset": 2920119,
      "principal": 1932000,
      "profit": 988119,
      "profitRate": 0.5114487577639751,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-12-09",
      "channelId": "ideco_gold",
      "asset": 2920119,
      "principal": 1932000,
      "profit": 988119,
      "profitRate": 0.5114487577639751,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-12-10",
      "channelId": "ideco_gold",
      "asset": 2980850,
      "principal": 1932000,
      "profit": 1048850,
      "profitRate": 0.5428830227743271,
      "reportedDailyChange": 60731,
      "source": "excel_import"
    },
    {
      "date": "2024-12-11",
      "channelId": "ideco_gold",
      "asset": 3020892,
      "principal": 1932000,
      "profit": 1088892,
      "profitRate": 0.5636086956521739,
      "reportedDailyChange": 40042,
      "source": "excel_import"
    },
    {
      "date": "2024-12-12",
      "channelId": "ideco_gold",
      "asset": 3054928,
      "principal": 1932000,
      "profit": 1122928,
      "profitRate": 0.5812256728778468,
      "reportedDailyChange": 34036,
      "source": "excel_import"
    },
    {
      "date": "2024-12-13",
      "channelId": "ideco_gold",
      "asset": 3003263,
      "principal": 1932000,
      "profit": 1071263,
      "profitRate": 0.5544839544513458,
      "reportedDailyChange": -51665,
      "source": "excel_import"
    },
    {
      "date": "2024-12-14",
      "channelId": "ideco_gold",
      "asset": 3003263,
      "principal": 1932000,
      "profit": 1071263,
      "profitRate": 0.5544839544513458,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-12-15",
      "channelId": "ideco_gold",
      "asset": 3026263,
      "principal": 1955000,
      "profit": 1071263,
      "profitRate": 0.5479606138107417,
      "reportedDailyChange": 23000,
      "source": "excel_import"
    },
    {
      "date": "2024-12-16",
      "channelId": "ideco_gold",
      "asset": 3026263,
      "principal": 1955000,
      "profit": 1071263,
      "profitRate": 0.5479606138107417,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-12-17",
      "channelId": "ideco_gold",
      "asset": 3031162,
      "principal": 1955000,
      "profit": 1076162,
      "profitRate": 0.5504664961636828,
      "reportedDailyChange": 4899,
      "source": "excel_import"
    },
    {
      "date": "2024-12-18",
      "channelId": "ideco_gold",
      "asset": 3012719,
      "principal": 1955000,
      "profit": 1057719,
      "profitRate": 0.54103273657289,
      "reportedDailyChange": -18443,
      "source": "excel_import"
    },
    {
      "date": "2024-12-19",
      "channelId": "ideco_gold",
      "asset": 3008972,
      "principal": 1955000,
      "profit": 1053972,
      "profitRate": 0.5391161125319693,
      "reportedDailyChange": -3747,
      "source": "excel_import"
    },
    {
      "date": "2024-12-20",
      "channelId": "ideco_gold",
      "asset": 3034716,
      "principal": 1955000,
      "profit": 1079716,
      "profitRate": 0.5522843989769821,
      "reportedDailyChange": 25744,
      "source": "excel_import"
    },
    {
      "date": "2024-12-21",
      "channelId": "ideco_gold",
      "asset": 3034716,
      "principal": 1955000,
      "profit": 1079716,
      "profitRate": 0.5522843989769821,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-12-22",
      "channelId": "ideco_gold",
      "asset": 3034716,
      "principal": 1955000,
      "profit": 1079716,
      "profitRate": 0.5522843989769821,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-12-23",
      "channelId": "ideco_gold",
      "asset": 3061515,
      "principal": 1955000,
      "profit": 1106515,
      "profitRate": 0.5659923273657289,
      "reportedDailyChange": 26799,
      "source": "excel_import"
    },
    {
      "date": "2024-12-24",
      "channelId": "ideco_gold",
      "asset": 3056521,
      "principal": 1955000,
      "profit": 1101521,
      "profitRate": 0.5634378516624041,
      "reportedDailyChange": -4994,
      "source": "excel_import"
    },
    {
      "date": "2024-12-25",
      "channelId": "ideco_gold",
      "asset": 3057769,
      "principal": 1955000,
      "profit": 1102769,
      "profitRate": 0.5640762148337596,
      "reportedDailyChange": 1248,
      "source": "excel_import"
    },
    {
      "date": "2024-12-26",
      "channelId": "ideco_gold",
      "asset": 3069872,
      "principal": 1955000,
      "profit": 1114872,
      "profitRate": 0.5702670076726343,
      "reportedDailyChange": 12103,
      "source": "excel_import"
    },
    {
      "date": "2024-12-27",
      "channelId": "ideco_gold",
      "asset": 3072178,
      "principal": 1955000,
      "profit": 1117178,
      "profitRate": 0.571446547314578,
      "reportedDailyChange": 2306,
      "source": "excel_import"
    },
    {
      "date": "2024-12-28",
      "channelId": "ideco_gold",
      "asset": 3072178,
      "principal": 1955000,
      "profit": 1117178,
      "profitRate": 0.571446547314578,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-12-29",
      "channelId": "ideco_gold",
      "asset": 3072178,
      "principal": 1955000,
      "profit": 1117178,
      "profitRate": 0.571446547314578,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-12-30",
      "channelId": "ideco_gold",
      "asset": 3072178,
      "principal": 1955000,
      "profit": 1117178,
      "profitRate": 0.571446547314578,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2024-12-31",
      "channelId": "ideco_gold",
      "asset": 3072178,
      "principal": 1955000,
      "profit": 1117178,
      "profitRate": 0.571446547314578,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-01-01",
      "channelId": "ideco_gold",
      "asset": 3072178,
      "principal": 1955000,
      "profit": 1117178,
      "profitRate": 0.571446547314578,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-01-02",
      "channelId": "ideco_gold",
      "asset": 3072178,
      "principal": 1955000,
      "profit": 1117178,
      "profitRate": 0.571446547314578,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-01-03",
      "channelId": "ideco_gold",
      "asset": 3072178,
      "principal": 1955000,
      "profit": 1117178,
      "profitRate": 0.571446547314578,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-01-04",
      "channelId": "ideco_gold",
      "asset": 3072178,
      "principal": 1955000,
      "profit": 1117178,
      "profitRate": 0.571446547314578,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-01-05",
      "channelId": "ideco_gold",
      "asset": 3072178,
      "principal": 1955000,
      "profit": 1117178,
      "profitRate": 0.571446547314578,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-01-06",
      "channelId": "ideco_gold",
      "asset": 3087643,
      "principal": 1955000,
      "profit": 1132643,
      "profitRate": 0.5793570332480819,
      "reportedDailyChange": 15465,
      "source": "excel_import"
    },
    {
      "date": "2025-01-07",
      "channelId": "ideco_gold",
      "asset": 3103492,
      "principal": 1955000,
      "profit": 1148492,
      "profitRate": 0.5874639386189259,
      "reportedDailyChange": 15849,
      "source": "excel_import"
    },
    {
      "date": "2025-01-08",
      "channelId": "ideco_gold",
      "asset": 3118093,
      "principal": 1955000,
      "profit": 1163093,
      "profitRate": 0.5949324808184143,
      "reportedDailyChange": 14601,
      "source": "excel_import"
    },
    {
      "date": "2025-01-09",
      "channelId": "ideco_gold",
      "asset": 3131541,
      "principal": 1955000,
      "profit": 1176541,
      "profitRate": 0.601811253196931,
      "reportedDailyChange": 13448,
      "source": "excel_import"
    },
    {
      "date": "2025-01-10",
      "channelId": "ideco_gold",
      "asset": 3128851,
      "principal": 1955000,
      "profit": 1173851,
      "profitRate": 0.6004352941176471,
      "reportedDailyChange": -2690,
      "source": "excel_import"
    },
    {
      "date": "2025-01-11",
      "channelId": "ideco_gold",
      "asset": 3128851,
      "principal": 1955000,
      "profit": 1173851,
      "profitRate": 0.6004352941176471,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-01-12",
      "channelId": "ideco_gold",
      "asset": 3128851,
      "principal": 1955000,
      "profit": 1173851,
      "profitRate": 0.6004352941176471,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-01-13",
      "channelId": "ideco_gold",
      "asset": 3128851,
      "principal": 1955000,
      "profit": 1173851,
      "profitRate": 0.6004352941176471,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-01-14",
      "channelId": "ideco_gold",
      "asset": 3128851,
      "principal": 1955000,
      "profit": 1173851,
      "profitRate": 0.6004352941176471,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-01-15",
      "channelId": "ideco_gold",
      "asset": 3141050,
      "principal": 1955000,
      "profit": 1186050,
      "profitRate": 0.6066751918158568,
      "reportedDailyChange": 12199,
      "source": "excel_import"
    },
    {
      "date": "2025-01-16",
      "channelId": "ideco_gold",
      "asset": 3123856,
      "principal": 1955000,
      "profit": 1168856,
      "profitRate": 0.5978803069053709,
      "reportedDailyChange": -17194,
      "source": "excel_import"
    },
    {
      "date": "2025-01-17",
      "channelId": "ideco_gold",
      "asset": 3138553,
      "principal": 1955000,
      "profit": 1183553,
      "profitRate": 0.6053979539641944,
      "reportedDailyChange": 14697,
      "source": "excel_import"
    },
    {
      "date": "2025-01-18",
      "channelId": "ideco_gold",
      "asset": 3172140,
      "principal": 1978000,
      "profit": 1194140,
      "profitRate": 0.6037108190091001,
      "reportedDailyChange": 33587,
      "source": "excel_import"
    },
    {
      "date": "2025-01-19",
      "channelId": "ideco_gold",
      "asset": 3172140,
      "principal": 1978000,
      "profit": 1194140,
      "profitRate": 0.6037108190091001,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-01-20",
      "channelId": "ideco_gold",
      "asset": 3172140,
      "principal": 1978000,
      "profit": 1194140,
      "profitRate": 0.6037108190091001,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-01-21",
      "channelId": "ideco_gold",
      "asset": 3172140,
      "principal": 1978000,
      "profit": 1194140,
      "profitRate": 0.6037108190091001,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-01-22",
      "channelId": "ideco_gold",
      "asset": 3205326,
      "principal": 1978000,
      "profit": 1227326,
      "profitRate": 0.6204883720930232,
      "reportedDailyChange": 33186,
      "source": "excel_import"
    },
    {
      "date": "2025-01-23",
      "channelId": "ideco_gold",
      "asset": 3226225,
      "principal": 1978000,
      "profit": 1248225,
      "profitRate": 0.6310540950455005,
      "reportedDailyChange": 20899,
      "source": "excel_import"
    },
    {
      "date": "2025-01-24",
      "channelId": "ideco_gold",
      "asset": 3224967,
      "principal": 1978000,
      "profit": 1246967,
      "profitRate": 0.6304180990899899,
      "reportedDailyChange": -1258,
      "source": "excel_import"
    },
    {
      "date": "2025-01-25",
      "channelId": "ideco_gold",
      "asset": 3214905,
      "principal": 1978000,
      "profit": 1236905,
      "profitRate": 0.6253311425682507,
      "reportedDailyChange": -10062,
      "source": "excel_import"
    },
    {
      "date": "2025-01-26",
      "channelId": "ideco_gold",
      "asset": 3214905,
      "principal": 1978000,
      "profit": 1236905,
      "profitRate": 0.6253311425682507,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-01-27",
      "channelId": "ideco_gold",
      "asset": 3214905,
      "principal": 1978000,
      "profit": 1236905,
      "profitRate": 0.6253311425682507,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-01-28",
      "channelId": "ideco_gold",
      "asset": 3192555,
      "principal": 1978000,
      "profit": 1214555,
      "profitRate": 0.6140318503538928,
      "reportedDailyChange": -22350,
      "source": "excel_import"
    },
    {
      "date": "2025-01-29",
      "channelId": "ideco_gold",
      "asset": 3207261,
      "principal": 1978000,
      "profit": 1229261,
      "profitRate": 0.6214666329625885,
      "reportedDailyChange": 14706,
      "source": "excel_import"
    },
    {
      "date": "2025-01-30",
      "channelId": "ideco_gold",
      "asset": 3199811,
      "principal": 1978000,
      "profit": 1221811,
      "profitRate": 0.6177002022244692,
      "reportedDailyChange": -7450,
      "source": "excel_import"
    },
    {
      "date": "2025-01-31",
      "channelId": "ideco_gold",
      "asset": 3231837,
      "principal": 1978000,
      "profit": 1253837,
      "profitRate": 0.633891304347826,
      "reportedDailyChange": 32026,
      "source": "excel_import"
    },
    {
      "date": "2025-02-01",
      "channelId": "ideco_gold",
      "asset": 3231837,
      "principal": 1978000,
      "profit": 1253837,
      "profitRate": 0.633891304347826,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-02-02",
      "channelId": "ideco_gold",
      "asset": 3231837,
      "principal": 1978000,
      "profit": 1253837,
      "profitRate": 0.633891304347826,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-02-03",
      "channelId": "ideco_gold",
      "asset": 3238996,
      "principal": 1978000,
      "profit": 1260996,
      "profitRate": 0.637510616784631,
      "reportedDailyChange": 7159,
      "source": "excel_import"
    },
    {
      "date": "2025-02-04",
      "channelId": "ideco_gold",
      "asset": 3275956,
      "principal": 1978000,
      "profit": 1297956,
      "profitRate": 0.656196157735086,
      "reportedDailyChange": 36960,
      "source": "excel_import"
    },
    {
      "date": "2025-02-05",
      "channelId": "ideco_gold",
      "asset": 3272086,
      "principal": 1978000,
      "profit": 1294086,
      "profitRate": 0.6542396359959555,
      "reportedDailyChange": -3870,
      "source": "excel_import"
    },
    {
      "date": "2025-02-06",
      "channelId": "ideco_gold",
      "asset": 3252348,
      "principal": 1978000,
      "profit": 1274348,
      "profitRate": 0.6442608695652174,
      "reportedDailyChange": -19738,
      "source": "excel_import"
    },
    {
      "date": "2025-02-07",
      "channelId": "ideco_gold",
      "asset": 3276827,
      "principal": 1978000,
      "profit": 1298827,
      "profitRate": 0.6566365015166835,
      "reportedDailyChange": 24479,
      "source": "excel_import"
    },
    {
      "date": "2025-02-08",
      "channelId": "ideco_gold",
      "asset": 3276827,
      "principal": 1978000,
      "profit": 1298827,
      "profitRate": 0.6566365015166835,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-02-09",
      "channelId": "ideco_gold",
      "asset": 3276827,
      "principal": 1978000,
      "profit": 1298827,
      "profitRate": 0.6566365015166835,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-02-10",
      "channelId": "ideco_gold",
      "asset": 3276827,
      "principal": 1978000,
      "profit": 1298827,
      "profitRate": 0.6566365015166835,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-02-11",
      "channelId": "ideco_gold",
      "asset": 3276827,
      "principal": 1978000,
      "profit": 1298827,
      "profitRate": 0.6566365015166835,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-02-12",
      "channelId": "ideco_gold",
      "asset": 3318527,
      "principal": 1978000,
      "profit": 1340527,
      "profitRate": 0.6777184024266937,
      "reportedDailyChange": 41700,
      "source": "excel_import"
    },
    {
      "date": "2025-02-13",
      "channelId": "ideco_gold",
      "asset": 3351446,
      "principal": 1978000,
      "profit": 1373446,
      "profitRate": 0.694360970677452,
      "reportedDailyChange": 32919,
      "source": "excel_import"
    },
    {
      "date": "2025-02-14",
      "channelId": "ideco_gold",
      "asset": 3351446,
      "principal": 1978000,
      "profit": 1373446,
      "profitRate": 0.694360970677452,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-02-15",
      "channelId": "ideco_gold",
      "asset": 3374446,
      "principal": 2001000,
      "profit": 1373446,
      "profitRate": 0.6863798100949525,
      "reportedDailyChange": 23000,
      "source": "excel_import"
    },
    {
      "date": "2025-02-16",
      "channelId": "ideco_gold",
      "asset": 3374446,
      "principal": 2001000,
      "profit": 1373446,
      "profitRate": 0.6863798100949525,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-02-17",
      "channelId": "ideco_gold",
      "asset": 3324765,
      "principal": 2001000,
      "profit": 1323765,
      "profitRate": 0.6615517241379311,
      "reportedDailyChange": -49681,
      "source": "excel_import"
    },
    {
      "date": "2025-02-18",
      "channelId": "ideco_gold",
      "asset": 3346975,
      "principal": 2001000,
      "profit": 1345975,
      "profitRate": 0.6726511744127937,
      "reportedDailyChange": 22210,
      "source": "excel_import"
    },
    {
      "date": "2025-02-19",
      "channelId": "ideco_gold",
      "asset": 3348047,
      "principal": 2001000,
      "profit": 1347047,
      "profitRate": 0.6731869065467266,
      "reportedDailyChange": 1072,
      "source": "excel_import"
    },
    {
      "date": "2025-02-20",
      "channelId": "ideco_gold",
      "asset": 3346683,
      "principal": 2001000,
      "profit": 1345683,
      "profitRate": 0.6725052473763119,
      "reportedDailyChange": -1364,
      "source": "excel_import"
    },
    {
      "date": "2025-02-21",
      "channelId": "ideco_gold",
      "asset": 3346683,
      "principal": 2001000,
      "profit": 1345683,
      "profitRate": 0.6725052473763119,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-02-22",
      "channelId": "ideco_gold",
      "asset": 3346683,
      "principal": 2001000,
      "profit": 1345683,
      "profitRate": 0.6725052473763119,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-02-23",
      "channelId": "ideco_gold",
      "asset": 3346683,
      "principal": 2001000,
      "profit": 1345683,
      "profitRate": 0.6725052473763119,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-02-24",
      "channelId": "ideco_gold",
      "asset": 3346683,
      "principal": 2001000,
      "profit": 1345683,
      "profitRate": 0.6725052473763119,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-02-25",
      "channelId": "ideco_gold",
      "asset": 3306744,
      "principal": 2001000,
      "profit": 1305744,
      "profitRate": 0.6525457271364318,
      "reportedDailyChange": -39939,
      "source": "excel_import"
    },
    {
      "date": "2025-02-26",
      "channelId": "ideco_gold",
      "asset": 3306744,
      "principal": 2001000,
      "profit": 1305744,
      "profitRate": 0.6525457271364318,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-02-27",
      "channelId": "ideco_gold",
      "asset": 3285508,
      "principal": 2001000,
      "profit": 1284508,
      "profitRate": 0.6419330334832584,
      "reportedDailyChange": -21236,
      "source": "excel_import"
    },
    {
      "date": "2025-02-28",
      "channelId": "ideco_gold",
      "asset": 3235925,
      "principal": 2001000,
      "profit": 1234925,
      "profitRate": 0.6171539230384807,
      "reportedDailyChange": -49583,
      "source": "excel_import"
    },
    {
      "date": "2025-03-01",
      "channelId": "ideco_gold",
      "asset": 3235925,
      "principal": 2001000,
      "profit": 1234925,
      "profitRate": 0.6171539230384807,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-03-02",
      "channelId": "ideco_gold",
      "asset": 3235925,
      "principal": 2001000,
      "profit": 1234925,
      "profitRate": 0.6171539230384807,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-03-03",
      "channelId": "ideco_gold",
      "asset": 3256674,
      "principal": 2001000,
      "profit": 1255674,
      "profitRate": 0.6275232383808096,
      "reportedDailyChange": 20749,
      "source": "excel_import"
    },
    {
      "date": "2025-03-04",
      "channelId": "ideco_gold",
      "asset": 3252875,
      "principal": 2001000,
      "profit": 1251875,
      "profitRate": 0.625624687656172,
      "reportedDailyChange": -3799,
      "source": "excel_import"
    },
    {
      "date": "2025-03-05",
      "channelId": "ideco_gold",
      "asset": 3277520,
      "principal": 2001000,
      "profit": 1276520,
      "profitRate": 0.6379410294852573,
      "reportedDailyChange": 24645,
      "source": "excel_import"
    },
    {
      "date": "2025-03-06",
      "channelId": "ideco_gold",
      "asset": 3277520,
      "principal": 2001000,
      "profit": 1276520,
      "profitRate": 0.6379410294852573,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-03-07",
      "channelId": "ideco_gold",
      "asset": 3242744,
      "principal": 2001000,
      "profit": 1241744,
      "profitRate": 0.6205617191404298,
      "reportedDailyChange": -34776,
      "source": "excel_import"
    },
    {
      "date": "2025-03-08",
      "channelId": "ideco_gold",
      "asset": 3242744,
      "principal": 2001000,
      "profit": 1241744,
      "profitRate": 0.6205617191404298,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-03-09",
      "channelId": "ideco_gold",
      "asset": 3242744,
      "principal": 2001000,
      "profit": 1241744,
      "profitRate": 0.6205617191404298,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-03-10",
      "channelId": "ideco_gold",
      "asset": 3251219,
      "principal": 2001000,
      "profit": 1250219,
      "profitRate": 0.6247971014492754,
      "reportedDailyChange": 8475,
      "source": "excel_import"
    },
    {
      "date": "2025-03-11",
      "channelId": "ideco_gold",
      "asset": 3261058,
      "principal": 2001000,
      "profit": 1260058,
      "profitRate": 0.6297141429285358,
      "reportedDailyChange": 9839,
      "source": "excel_import"
    },
    {
      "date": "2025-03-12",
      "channelId": "ideco_gold",
      "asset": 3261058,
      "principal": 2001000,
      "profit": 1260058,
      "profitRate": 0.6297141429285358,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-03-13",
      "channelId": "ideco_gold",
      "asset": 3347657,
      "principal": 2001000,
      "profit": 1346657,
      "profitRate": 0.672992003998001,
      "reportedDailyChange": 86599,
      "source": "excel_import"
    },
    {
      "date": "2025-03-14",
      "channelId": "ideco_gold",
      "asset": 3347657,
      "principal": 2001000,
      "profit": 1346657,
      "profitRate": 0.672992003998001,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-03-15",
      "channelId": "ideco_gold",
      "asset": 3347657,
      "principal": 2001000,
      "profit": 1346657,
      "profitRate": 0.672992003998001,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-03-16",
      "channelId": "ideco_gold",
      "asset": 3347657,
      "principal": 2001000,
      "profit": 1346657,
      "profitRate": 0.672992003998001,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-03-17",
      "channelId": "ideco_gold",
      "asset": 3380227,
      "principal": 2024000,
      "profit": 1356227,
      "profitRate": 0.670072628458498,
      "reportedDailyChange": 32570,
      "source": "excel_import"
    },
    {
      "date": "2025-03-18",
      "channelId": "ideco_gold",
      "asset": 3421223,
      "principal": 2024000,
      "profit": 1397223,
      "profitRate": 0.6903275691699605,
      "reportedDailyChange": 40996,
      "source": "excel_import"
    },
    {
      "date": "2025-03-19",
      "channelId": "ideco_gold",
      "asset": 3463690,
      "principal": 2024000,
      "profit": 1439690,
      "profitRate": 0.7113092885375494,
      "reportedDailyChange": 42467,
      "source": "excel_import"
    },
    {
      "date": "2025-03-20",
      "channelId": "ideco_gold",
      "asset": 3463690,
      "principal": 2024000,
      "profit": 1439690,
      "profitRate": 0.7113092885375494,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-03-21",
      "channelId": "ideco_gold",
      "asset": 3453588,
      "principal": 2024000,
      "profit": 1429588,
      "profitRate": 0.7063181818181818,
      "reportedDailyChange": -10102,
      "source": "excel_import"
    },
    {
      "date": "2025-03-22",
      "channelId": "ideco_gold",
      "asset": 3453588,
      "principal": 2024000,
      "profit": 1429588,
      "profitRate": 0.7063181818181818,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-03-23",
      "channelId": "ideco_gold",
      "asset": 3453588,
      "principal": 2024000,
      "profit": 1429588,
      "profitRate": 0.7063181818181818,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-03-24",
      "channelId": "ideco_gold",
      "asset": 3442211,
      "principal": 2024000,
      "profit": 1418211,
      "profitRate": 0.7006971343873518,
      "reportedDailyChange": -11377,
      "source": "excel_import"
    },
    {
      "date": "2025-03-25",
      "channelId": "ideco_gold",
      "asset": 3450842,
      "principal": 2024000,
      "profit": 1426842,
      "profitRate": 0.7049614624505929,
      "reportedDailyChange": 8631,
      "source": "excel_import"
    },
    {
      "date": "2025-03-26",
      "channelId": "ideco_gold",
      "asset": 3455746,
      "principal": 2024000,
      "profit": 1431746,
      "profitRate": 0.7073843873517787,
      "reportedDailyChange": 4904,
      "source": "excel_import"
    },
    {
      "date": "2025-03-27",
      "channelId": "ideco_gold",
      "asset": 3456922,
      "principal": 2024000,
      "profit": 1432922,
      "profitRate": 0.7079654150197628,
      "reportedDailyChange": 1176,
      "source": "excel_import"
    },
    {
      "date": "2025-03-28",
      "channelId": "ideco_gold",
      "asset": 3545484,
      "principal": 2024000,
      "profit": 1521484,
      "profitRate": 0.7517213438735177,
      "reportedDailyChange": 88562,
      "source": "excel_import"
    },
    {
      "date": "2025-03-29",
      "channelId": "ideco_gold",
      "asset": 3545484,
      "principal": 2024000,
      "profit": 1521484,
      "profitRate": 0.7517213438735177,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-03-30",
      "channelId": "ideco_gold",
      "asset": 3545484,
      "principal": 2024000,
      "profit": 1521484,
      "profitRate": 0.7517213438735177,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-03-31",
      "channelId": "ideco_gold",
      "asset": 3571571,
      "principal": 2024000,
      "profit": 1547571,
      "profitRate": 0.7646101778656127,
      "reportedDailyChange": 26087,
      "source": "excel_import"
    },
    {
      "date": "2025-04-01",
      "channelId": "ideco_gold",
      "asset": 3585106,
      "principal": 2024000,
      "profit": 1561106,
      "profitRate": 0.7712974308300395,
      "reportedDailyChange": 13535,
      "source": "excel_import"
    },
    {
      "date": "2025-04-02",
      "channelId": "ideco_gold",
      "asset": 3556370,
      "principal": 2024000,
      "profit": 1532370,
      "profitRate": 0.7570998023715415,
      "reportedDailyChange": -28736,
      "source": "excel_import"
    },
    {
      "date": "2025-04-03",
      "channelId": "ideco_gold",
      "asset": 3502625,
      "principal": 2024000,
      "profit": 1478625,
      "profitRate": 0.7305459486166008,
      "reportedDailyChange": -53745,
      "source": "excel_import"
    },
    {
      "date": "2025-04-04",
      "channelId": "ideco_gold",
      "asset": 3445252,
      "principal": 2024000,
      "profit": 1421252,
      "profitRate": 0.702199604743083,
      "reportedDailyChange": -57373,
      "source": "excel_import"
    },
    {
      "date": "2025-04-05",
      "channelId": "ideco_gold",
      "asset": 3445252,
      "principal": 2024000,
      "profit": 1421252,
      "profitRate": 0.702199604743083,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-04-06",
      "channelId": "ideco_gold",
      "asset": 3445252,
      "principal": 2024000,
      "profit": 1421252,
      "profitRate": 0.702199604743083,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-04-07",
      "channelId": "ideco_gold",
      "asset": 3374246,
      "principal": 2024000,
      "profit": 1350246,
      "profitRate": 0.6671175889328064,
      "reportedDailyChange": -71006,
      "source": "excel_import"
    },
    {
      "date": "2025-04-08",
      "channelId": "ideco_gold",
      "asset": 3374246,
      "principal": 2024000,
      "profit": 1350246,
      "profitRate": 0.6671175889328064,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-04-09",
      "channelId": "ideco_gold",
      "asset": 3345118,
      "principal": 2024000,
      "profit": 1321118,
      "profitRate": 0.6527262845849803,
      "reportedDailyChange": -29128,
      "source": "excel_import"
    },
    {
      "date": "2025-04-10",
      "channelId": "ideco_gold",
      "asset": 3508215,
      "principal": 2024000,
      "profit": 1484215,
      "profitRate": 0.7333078063241106,
      "reportedDailyChange": 163097,
      "source": "excel_import"
    },
    {
      "date": "2025-04-11",
      "channelId": "ideco_gold",
      "asset": 3508215,
      "principal": 2024000,
      "profit": 1484215,
      "profitRate": 0.7333078063241106,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-04-12",
      "channelId": "ideco_gold",
      "asset": 3508215,
      "principal": 2024000,
      "profit": 1484215,
      "profitRate": 0.7333078063241106,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-04-13",
      "channelId": "ideco_gold",
      "asset": 3508215,
      "principal": 2024000,
      "profit": 1484215,
      "profitRate": 0.7333078063241106,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-04-14",
      "channelId": "ideco_gold",
      "asset": 3522755,
      "principal": 2024000,
      "profit": 1498755,
      "profitRate": 0.7404916007905138,
      "reportedDailyChange": 14540,
      "source": "excel_import"
    },
    {
      "date": "2025-04-15",
      "channelId": "ideco_gold",
      "asset": 3526505,
      "principal": 2024000,
      "profit": 1502505,
      "profitRate": 0.7423443675889329,
      "reportedDailyChange": 3750,
      "source": "excel_import"
    },
    {
      "date": "2025-04-16",
      "channelId": "ideco_gold",
      "asset": 3576551,
      "principal": 2024000,
      "profit": 1552551,
      "profitRate": 0.767070652173913,
      "reportedDailyChange": 50046,
      "source": "excel_import"
    },
    {
      "date": "2025-04-17",
      "channelId": "ideco_gold",
      "asset": 3638245,
      "principal": 2047000,
      "profit": 1591245,
      "profitRate": 0.7773546653639473,
      "reportedDailyChange": 61694,
      "source": "excel_import"
    },
    {
      "date": "2025-04-18",
      "channelId": "ideco_gold",
      "asset": 3651867,
      "principal": 2047000,
      "profit": 1604867,
      "profitRate": 0.784009281875916,
      "reportedDailyChange": 13622,
      "source": "excel_import"
    },
    {
      "date": "2025-04-19",
      "channelId": "ideco_gold",
      "asset": 3651867,
      "principal": 2047000,
      "profit": 1604867,
      "profitRate": 0.784009281875916,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-04-20",
      "channelId": "ideco_gold",
      "asset": 3651867,
      "principal": 2047000,
      "profit": 1604867,
      "profitRate": 0.784009281875916,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-04-21",
      "channelId": "ideco_gold",
      "asset": 3651867,
      "principal": 2047000,
      "profit": 1604867,
      "profitRate": 0.784009281875916,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-04-22",
      "channelId": "ideco_gold",
      "asset": 3738436,
      "principal": 2047000,
      "profit": 1691436,
      "profitRate": 0.8262999511480215,
      "reportedDailyChange": 86569,
      "source": "excel_import"
    },
    {
      "date": "2025-04-23",
      "channelId": "ideco_gold",
      "asset": 3595405,
      "principal": 2047000,
      "profit": 1548405,
      "profitRate": 0.7564264777723497,
      "reportedDailyChange": -143031,
      "source": "excel_import"
    },
    {
      "date": "2025-04-24",
      "channelId": "ideco_gold",
      "asset": 3615443,
      "principal": 2047000,
      "profit": 1568443,
      "profitRate": 0.7662154372252076,
      "reportedDailyChange": 20038,
      "source": "excel_import"
    },
    {
      "date": "2025-04-25",
      "channelId": "ideco_gold",
      "asset": 3603993,
      "principal": 2047000,
      "profit": 1556993,
      "profitRate": 0.7606218856863703,
      "reportedDailyChange": -11450,
      "source": "excel_import"
    },
    {
      "date": "2025-04-26",
      "channelId": "ideco_gold",
      "asset": 3590075,
      "principal": 2047000,
      "profit": 1543075,
      "profitRate": 0.7538226673180264,
      "reportedDailyChange": -13918,
      "source": "excel_import"
    },
    {
      "date": "2025-04-27",
      "channelId": "ideco_gold",
      "asset": 3587410,
      "principal": 2047000,
      "profit": 1540410,
      "profitRate": 0.7525207620908647,
      "reportedDailyChange": -2665,
      "source": "excel_import"
    },
    {
      "date": "2025-04-28",
      "channelId": "ideco_gold",
      "asset": 3601130,
      "principal": 2047000,
      "profit": 1554130,
      "profitRate": 0.7592232535417685,
      "reportedDailyChange": 13720,
      "source": "excel_import"
    },
    {
      "date": "2025-04-29",
      "channelId": "ideco_gold",
      "asset": 3601130,
      "principal": 2047000,
      "profit": 1554130,
      "profitRate": 0.7592232535417685,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-04-30",
      "channelId": "ideco_gold",
      "asset": 3601130,
      "principal": 2047000,
      "profit": 1554130,
      "profitRate": 0.7592232535417685,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-05-01",
      "channelId": "ideco_gold",
      "asset": 3601130,
      "principal": 2047000,
      "profit": 1554130,
      "profitRate": 0.7592232535417685,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-05-02",
      "channelId": "ideco_gold",
      "asset": 3601130,
      "principal": 2047000,
      "profit": 1554130,
      "profitRate": 0.7592232535417685,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-05-03",
      "channelId": "ideco_gold",
      "asset": 3601130,
      "principal": 2047000,
      "profit": 1554130,
      "profitRate": 0.7592232535417685,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-05-04",
      "channelId": "ideco_gold",
      "asset": 3601130,
      "principal": 2047000,
      "profit": 1554130,
      "profitRate": 0.7592232535417685,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-05-05",
      "channelId": "ideco_gold",
      "asset": 3601130,
      "principal": 2047000,
      "profit": 1554130,
      "profitRate": 0.7592232535417685,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-05-06",
      "channelId": "ideco_gold",
      "asset": 3601130,
      "principal": 2047000,
      "profit": 1554130,
      "profitRate": 0.7592232535417685,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-05-07",
      "channelId": "ideco_gold",
      "asset": 3685132,
      "principal": 2047000,
      "profit": 1638132,
      "profitRate": 0.8002598925256473,
      "reportedDailyChange": 84002,
      "source": "excel_import"
    },
    {
      "date": "2025-05-08",
      "channelId": "ideco_gold",
      "asset": 3670030,
      "principal": 2047000,
      "profit": 1623030,
      "profitRate": 0.7928822667318026,
      "reportedDailyChange": -15102,
      "source": "excel_import"
    },
    {
      "date": "2025-05-09",
      "channelId": "ideco_gold",
      "asset": 3671214,
      "principal": 2047000,
      "profit": 1624214,
      "profitRate": 0.7934606741573034,
      "reportedDailyChange": 1184,
      "source": "excel_import"
    },
    {
      "date": "2025-05-10",
      "channelId": "ideco_gold",
      "asset": 3671214,
      "principal": 2047000,
      "profit": 1624214,
      "profitRate": 0.7934606741573034,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-05-11",
      "channelId": "ideco_gold",
      "asset": 3671214,
      "principal": 2047000,
      "profit": 1624214,
      "profitRate": 0.7934606741573034,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-05-12",
      "channelId": "ideco_gold",
      "asset": 3639627,
      "principal": 2047000,
      "profit": 1592627,
      "profitRate": 0.7780297997068881,
      "reportedDailyChange": -31587,
      "source": "excel_import"
    },
    {
      "date": "2025-05-13",
      "channelId": "ideco_gold",
      "asset": 3488700,
      "principal": 2047000,
      "profit": 1441700,
      "profitRate": 0.7042989741084514,
      "reportedDailyChange": -150927,
      "source": "excel_import"
    },
    {
      "date": "2025-05-14",
      "channelId": "ideco_gold",
      "asset": 3488700,
      "principal": 2047000,
      "profit": 1441700,
      "profitRate": 0.7042989741084514,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-05-15",
      "channelId": "ideco_gold",
      "asset": 3488700,
      "principal": 2047000,
      "profit": 1441700,
      "profitRate": 0.7042989741084514,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-05-16",
      "channelId": "ideco_gold",
      "asset": 3563917,
      "principal": 2047000,
      "profit": 1516917,
      "profitRate": 0.7410439667806547,
      "reportedDailyChange": 75217,
      "source": "excel_import"
    },
    {
      "date": "2025-05-17",
      "channelId": "ideco_gold",
      "asset": 3586917,
      "principal": 2070000,
      "profit": 1516917,
      "profitRate": 0.7328101449275363,
      "reportedDailyChange": 23000,
      "source": "excel_import"
    },
    {
      "date": "2025-05-18",
      "channelId": "ideco_gold",
      "asset": 3586917,
      "principal": 2070000,
      "profit": 1516917,
      "profitRate": 0.7328101449275363,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-05-19",
      "channelId": "ideco_gold",
      "asset": 3588101,
      "principal": 2070000,
      "profit": 1518101,
      "profitRate": 0.7333821256038647,
      "reportedDailyChange": 1184,
      "source": "excel_import"
    },
    {
      "date": "2025-05-20",
      "channelId": "ideco_gold",
      "asset": 3649615,
      "principal": 2070000,
      "profit": 1579615,
      "profitRate": 0.7630990338164251,
      "reportedDailyChange": 61514,
      "source": "excel_import"
    },
    {
      "date": "2025-05-21",
      "channelId": "ideco_gold",
      "asset": 3649615,
      "principal": 2070000,
      "profit": 1579615,
      "profitRate": 0.7630990338164251,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-05-22",
      "channelId": "ideco_gold",
      "asset": 3658258,
      "principal": 2070000,
      "profit": 1588258,
      "profitRate": 0.7672743961352657,
      "reportedDailyChange": 8643,
      "source": "excel_import"
    },
    {
      "date": "2025-05-23",
      "channelId": "ideco_gold",
      "asset": 3658258,
      "principal": 2070000,
      "profit": 1588258,
      "profitRate": 0.7672743961352657,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-05-24",
      "channelId": "ideco_gold",
      "asset": 3658258,
      "principal": 2070000,
      "profit": 1588258,
      "profitRate": 0.7672743961352657,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-05-25",
      "channelId": "ideco_gold",
      "asset": 3658258,
      "principal": 2070000,
      "profit": 1588258,
      "profitRate": 0.7672743961352657,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-05-26",
      "channelId": "ideco_gold",
      "asset": 3658258,
      "principal": 2070000,
      "profit": 1588258,
      "profitRate": 0.7672743961352657,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-05-27",
      "channelId": "ideco_gold",
      "asset": 3631434,
      "principal": 2070000,
      "profit": 1561434,
      "profitRate": 0.7543159420289856,
      "reportedDailyChange": -26824,
      "source": "excel_import"
    },
    {
      "date": "2025-05-28",
      "channelId": "ideco_gold",
      "asset": 3631434,
      "principal": 2070000,
      "profit": 1561434,
      "profitRate": 0.7543159420289856,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-05-29",
      "channelId": "ideco_gold",
      "asset": 3631434,
      "principal": 2070000,
      "profit": 1561434,
      "profitRate": 0.7543159420289856,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-05-30",
      "channelId": "ideco_gold",
      "asset": 3631434,
      "principal": 2070000,
      "profit": 1561434,
      "profitRate": 0.7543159420289856,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-05-31",
      "channelId": "ideco_gold",
      "asset": 3631434,
      "principal": 2070000,
      "profit": 1561434,
      "profitRate": 0.7543159420289856,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-06-01",
      "channelId": "ideco_gold",
      "asset": 3631434,
      "principal": 2070000,
      "profit": 1561434,
      "profitRate": 0.7543159420289856,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-06-02",
      "channelId": "ideco_gold",
      "asset": 3682995,
      "principal": 2070000,
      "profit": 1612995,
      "profitRate": 0.7792246376811595,
      "reportedDailyChange": 51561,
      "source": "excel_import"
    },
    {
      "date": "2025-06-03",
      "channelId": "ideco_gold",
      "asset": 3682995,
      "principal": 2070000,
      "profit": 1612995,
      "profitRate": 0.7792246376811595,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-06-04",
      "channelId": "ideco_gold",
      "asset": 3715680,
      "principal": 2070000,
      "profit": 1645680,
      "profitRate": 0.7950144927536232,
      "reportedDailyChange": 32685,
      "source": "excel_import"
    },
    {
      "date": "2025-06-05",
      "channelId": "ideco_gold",
      "asset": 3715680,
      "principal": 2070000,
      "profit": 1645680,
      "profitRate": 0.7950144927536232,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-06-06",
      "channelId": "ideco_gold",
      "asset": 3715680,
      "principal": 2070000,
      "profit": 1645680,
      "profitRate": 0.7950144927536232,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-06-07",
      "channelId": "ideco_gold",
      "asset": 3715680,
      "principal": 2070000,
      "profit": 1645680,
      "profitRate": 0.7950144927536232,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-06-08",
      "channelId": "ideco_gold",
      "asset": 3715680,
      "principal": 2070000,
      "profit": 1645680,
      "profitRate": 0.7950144927536232,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-06-09",
      "channelId": "ideco_gold",
      "asset": 3682697,
      "principal": 2070000,
      "profit": 1612697,
      "profitRate": 0.7790806763285024,
      "reportedDailyChange": -32983,
      "source": "excel_import"
    },
    {
      "date": "2025-06-10",
      "channelId": "ideco_gold",
      "asset": 3682697,
      "principal": 2070000,
      "profit": 1612697,
      "profitRate": 0.7790806763285024,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-06-11",
      "channelId": "ideco_gold",
      "asset": 3710316,
      "principal": 2070000,
      "profit": 1640316,
      "profitRate": 0.7924231884057971,
      "reportedDailyChange": 27619,
      "source": "excel_import"
    },
    {
      "date": "2025-06-12",
      "channelId": "ideco_gold",
      "asset": 3738211,
      "principal": 2093000,
      "profit": 1645211,
      "profitRate": 0.7860539894887721,
      "reportedDailyChange": 27895,
      "source": "excel_import"
    },
    {
      "date": "2025-06-13",
      "channelId": "ideco_gold",
      "asset": 3796085,
      "principal": 2093000,
      "profit": 1703085,
      "profitRate": 0.8137052078356426,
      "reportedDailyChange": 57874,
      "source": "excel_import"
    },
    {
      "date": "2025-06-14",
      "channelId": "ideco_gold",
      "asset": 3796085,
      "principal": 2093000,
      "profit": 1703085,
      "profitRate": 0.8137052078356426,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-06-15",
      "channelId": "ideco_gold",
      "asset": 3796085,
      "principal": 2093000,
      "profit": 1703085,
      "profitRate": 0.8137052078356426,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-06-16",
      "channelId": "ideco_gold",
      "asset": 3796085,
      "principal": 2093000,
      "profit": 1703085,
      "profitRate": 0.8137052078356426,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-06-17",
      "channelId": "ideco_gold",
      "asset": 3794686,
      "principal": 2093000,
      "profit": 1701686,
      "profitRate": 0.8130367892976589,
      "reportedDailyChange": -1399,
      "source": "excel_import"
    },
    {
      "date": "2025-06-18",
      "channelId": "ideco_gold",
      "asset": 3794686,
      "principal": 2093000,
      "profit": 1701686,
      "profitRate": 0.8130367892976589,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-06-19",
      "channelId": "ideco_gold",
      "asset": 3808180,
      "principal": 2093000,
      "profit": 1715180,
      "profitRate": 0.819483994266603,
      "reportedDailyChange": 13494,
      "source": "excel_import"
    },
    {
      "date": "2025-06-20",
      "channelId": "ideco_gold",
      "asset": 3808180,
      "principal": 2093000,
      "profit": 1715180,
      "profitRate": 0.819483994266603,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-06-21",
      "channelId": "ideco_gold",
      "asset": 3808180,
      "principal": 2093000,
      "profit": 1715180,
      "profitRate": 0.819483994266603,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-06-22",
      "channelId": "ideco_gold",
      "asset": 3808180,
      "principal": 2093000,
      "profit": 1715180,
      "profitRate": 0.819483994266603,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-06-23",
      "channelId": "ideco_gold",
      "asset": 3808180,
      "principal": 2093000,
      "profit": 1715180,
      "profitRate": 0.819483994266603,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-06-24",
      "channelId": "ideco_gold",
      "asset": 3724416,
      "principal": 2093000,
      "profit": 1631416,
      "profitRate": 0.7794629718107979,
      "reportedDailyChange": -83764,
      "source": "excel_import"
    },
    {
      "date": "2025-06-25",
      "channelId": "ideco_gold",
      "asset": 3732013,
      "principal": 2093000,
      "profit": 1639013,
      "profitRate": 0.7830926899187769,
      "reportedDailyChange": 7597,
      "source": "excel_import"
    },
    {
      "date": "2025-06-26",
      "channelId": "ideco_gold",
      "asset": 3721817,
      "principal": 2093000,
      "profit": 1628817,
      "profitRate": 0.7782212135690396,
      "reportedDailyChange": -10196,
      "source": "excel_import"
    },
    {
      "date": "2025-06-27",
      "channelId": "ideco_gold",
      "asset": 3669739,
      "principal": 2093000,
      "profit": 1576739,
      "profitRate": 0.7533392259913999,
      "reportedDailyChange": -52078,
      "source": "excel_import"
    },
    {
      "date": "2025-06-28",
      "channelId": "ideco_gold",
      "asset": 3669739,
      "principal": 2093000,
      "profit": 1576739,
      "profitRate": 0.7533392259913999,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-06-29",
      "channelId": "ideco_gold",
      "asset": 3669739,
      "principal": 2093000,
      "profit": 1576739,
      "profitRate": 0.7533392259913999,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-06-30",
      "channelId": "ideco_gold",
      "asset": 3688631,
      "principal": 2093000,
      "profit": 1595631,
      "profitRate": 0.7623655040611562,
      "reportedDailyChange": 18892,
      "source": "excel_import"
    },
    {
      "date": "2025-07-01",
      "channelId": "ideco_gold",
      "asset": 3688631,
      "principal": 2093000,
      "profit": 1595631,
      "profitRate": 0.7623655040611562,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-07-02",
      "channelId": "ideco_gold",
      "asset": 3699926,
      "principal": 2093000,
      "profit": 1606926,
      "profitRate": 0.7677620640229336,
      "reportedDailyChange": 11295,
      "source": "excel_import"
    },
    {
      "date": "2025-07-03",
      "channelId": "ideco_gold",
      "asset": 3722717,
      "principal": 2093000,
      "profit": 1629717,
      "profitRate": 0.7786512183468706,
      "reportedDailyChange": 22791,
      "source": "excel_import"
    },
    {
      "date": "2025-07-04",
      "channelId": "ideco_gold",
      "asset": 3722717,
      "principal": 2093000,
      "profit": 1629717,
      "profitRate": 0.7786512183468706,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-07-05",
      "channelId": "ideco_gold",
      "asset": 3722717,
      "principal": 2093000,
      "profit": 1629717,
      "profitRate": 0.7786512183468706,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-07-06",
      "channelId": "ideco_gold",
      "asset": 3722717,
      "principal": 2093000,
      "profit": 1629717,
      "profitRate": 0.7786512183468706,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-07-07",
      "channelId": "ideco_gold",
      "asset": 3707323,
      "principal": 2093000,
      "profit": 1614323,
      "profitRate": 0.7712962255136169,
      "reportedDailyChange": -15394,
      "source": "excel_import"
    },
    {
      "date": "2025-07-08",
      "channelId": "ideco_gold",
      "asset": 3746507,
      "principal": 2093000,
      "profit": 1653507,
      "profitRate": 0.7900176779741998,
      "reportedDailyChange": 39184,
      "source": "excel_import"
    },
    {
      "date": "2025-07-09",
      "channelId": "ideco_gold",
      "asset": 3746507,
      "principal": 2093000,
      "profit": 1653507,
      "profitRate": 0.7900176779741998,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-07-10",
      "channelId": "ideco_gold",
      "asset": 3746507,
      "principal": 2093000,
      "profit": 1653507,
      "profitRate": 0.7900176779741998,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-07-11",
      "channelId": "ideco_gold",
      "asset": 3778193,
      "principal": 2093000,
      "profit": 1685193,
      "profitRate": 0.805156712852365,
      "reportedDailyChange": 31686,
      "source": "excel_import"
    },
    {
      "date": "2025-07-12",
      "channelId": "ideco_gold",
      "asset": 3778193,
      "principal": 2093000,
      "profit": 1685193,
      "profitRate": 0.805156712852365,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-07-13",
      "channelId": "ideco_gold",
      "asset": 3778193,
      "principal": 2093000,
      "profit": 1685193,
      "profitRate": 0.805156712852365,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-07-14",
      "channelId": "ideco_gold",
      "asset": 3808480,
      "principal": 2093000,
      "profit": 1715480,
      "profitRate": 0.8196273291925465,
      "reportedDailyChange": 30287,
      "source": "excel_import"
    },
    {
      "date": "2025-07-15",
      "channelId": "ideco_gold",
      "asset": 3843904,
      "principal": 2116000,
      "profit": 1727904,
      "profitRate": 0.8165897920604915,
      "reportedDailyChange": 35424,
      "source": "excel_import"
    },
    {
      "date": "2025-07-16",
      "channelId": "ideco_gold",
      "asset": 3845111,
      "principal": 2116000,
      "profit": 1729111,
      "profitRate": 0.8171602079395085,
      "reportedDailyChange": 1207,
      "source": "excel_import"
    },
    {
      "date": "2025-07-17",
      "channelId": "ideco_gold",
      "asset": 3845010,
      "principal": 2116000,
      "profit": 1729010,
      "profitRate": 0.8171124763705104,
      "reportedDailyChange": -101,
      "source": "excel_import"
    },
    {
      "date": "2025-07-18",
      "channelId": "ideco_gold",
      "asset": 3874171,
      "principal": 2116000,
      "profit": 1758171,
      "profitRate": 0.8308936672967864,
      "reportedDailyChange": 29161,
      "source": "excel_import"
    },
    {
      "date": "2025-07-19",
      "channelId": "ideco_gold",
      "asset": 3889355,
      "principal": 2116000,
      "profit": 1773355,
      "profitRate": 0.8380694706994329,
      "reportedDailyChange": 15184,
      "source": "excel_import"
    },
    {
      "date": "2025-07-20",
      "channelId": "ideco_gold",
      "asset": 3830329,
      "principal": 2116000,
      "profit": 1714329,
      "profitRate": 0.8101743856332703,
      "reportedDailyChange": -59026,
      "source": "excel_import"
    },
    {
      "date": "2025-07-21",
      "channelId": "ideco_gold",
      "asset": 3830329,
      "principal": 2116000,
      "profit": 1714329,
      "profitRate": 0.8101743856332703,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-07-22",
      "channelId": "ideco_gold",
      "asset": 3830329,
      "principal": 2116000,
      "profit": 1714329,
      "profitRate": 0.8101743856332703,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-07-23",
      "channelId": "ideco_gold",
      "asset": 3830329,
      "principal": 2116000,
      "profit": 1714329,
      "profitRate": 0.8101743856332703,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-07-24",
      "channelId": "ideco_gold",
      "asset": 3830329,
      "principal": 2116000,
      "profit": 1714329,
      "profitRate": 0.8101743856332703,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-07-25",
      "channelId": "ideco_gold",
      "asset": 3830329,
      "principal": 2116000,
      "profit": 1714329,
      "profitRate": 0.8101743856332703,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-07-26",
      "channelId": "ideco_gold",
      "asset": 3830329,
      "principal": 2116000,
      "profit": 1714329,
      "profitRate": 0.8101743856332703,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-07-27",
      "channelId": "ideco_gold",
      "asset": 3830329,
      "principal": 2116000,
      "profit": 1714329,
      "profitRate": 0.8101743856332703,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-07-28",
      "channelId": "ideco_gold",
      "asset": 3830329,
      "principal": 2116000,
      "profit": 1714329,
      "profitRate": 0.8101743856332703,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-07-29",
      "channelId": "ideco_gold",
      "asset": 3812330,
      "principal": 2116000,
      "profit": 1696330,
      "profitRate": 0.8016682419659735,
      "reportedDailyChange": -17999,
      "source": "excel_import"
    },
    {
      "date": "2025-07-30",
      "channelId": "ideco_gold",
      "asset": 3812330,
      "principal": 2116000,
      "profit": 1696330,
      "profitRate": 0.8016682419659735,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-07-31",
      "channelId": "ideco_gold",
      "asset": 3835256,
      "principal": 2116000,
      "profit": 1719256,
      "profitRate": 0.8125028355387524,
      "reportedDailyChange": 22926,
      "source": "excel_import"
    },
    {
      "date": "2025-08-01",
      "channelId": "ideco_gold",
      "asset": 3835256,
      "principal": 2116000,
      "profit": 1719256,
      "profitRate": 0.8125028355387524,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-08-02",
      "channelId": "ideco_gold",
      "asset": 3835256,
      "principal": 2116000,
      "profit": 1719256,
      "profitRate": 0.8125028355387524,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-08-03",
      "channelId": "ideco_gold",
      "asset": 3835256,
      "principal": 2116000,
      "profit": 1719256,
      "profitRate": 0.8125028355387524,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-08-04",
      "channelId": "ideco_gold",
      "asset": 3837569,
      "principal": 2116000,
      "profit": 1721569,
      "profitRate": 0.8135959357277883,
      "reportedDailyChange": 2313,
      "source": "excel_import"
    },
    {
      "date": "2025-08-05",
      "channelId": "ideco_gold",
      "asset": 3837569,
      "principal": 2116000,
      "profit": 1721569,
      "profitRate": 0.8135959357277883,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-08-06",
      "channelId": "ideco_gold",
      "asset": 3857881,
      "principal": 2116000,
      "profit": 1741881,
      "profitRate": 0.823195179584121,
      "reportedDailyChange": 20312,
      "source": "excel_import"
    },
    {
      "date": "2025-08-07",
      "channelId": "ideco_gold",
      "asset": 3852753,
      "principal": 2116000,
      "profit": 1736753,
      "profitRate": 0.8207717391304348,
      "reportedDailyChange": -5128,
      "source": "excel_import"
    },
    {
      "date": "2025-08-08",
      "channelId": "ideco_gold",
      "asset": 3864116,
      "principal": 2116000,
      "profit": 1748116,
      "profitRate": 0.8261417769376181,
      "reportedDailyChange": 11363,
      "source": "excel_import"
    },
    {
      "date": "2025-08-09",
      "channelId": "ideco_gold",
      "asset": 3864116,
      "principal": 2116000,
      "profit": 1748116,
      "profitRate": 0.8261417769376181,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-08-10",
      "channelId": "ideco_gold",
      "asset": 3864116,
      "principal": 2116000,
      "profit": 1748116,
      "profitRate": 0.8261417769376181,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-08-11",
      "channelId": "ideco_gold",
      "asset": 3864116,
      "principal": 2116000,
      "profit": 1748116,
      "profitRate": 0.8261417769376181,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-08-12",
      "channelId": "ideco_gold",
      "asset": 3842195,
      "principal": 2116000,
      "profit": 1726195,
      "profitRate": 0.8157821361058601,
      "reportedDailyChange": -21921,
      "source": "excel_import"
    },
    {
      "date": "2025-08-13",
      "channelId": "ideco_gold",
      "asset": 3842195,
      "principal": 2116000,
      "profit": 1726195,
      "profitRate": 0.8157821361058601,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-08-14",
      "channelId": "ideco_gold",
      "asset": 3805090,
      "principal": 2116000,
      "profit": 1689090,
      "profitRate": 0.7982466918714556,
      "reportedDailyChange": -37105,
      "source": "excel_import"
    },
    {
      "date": "2025-08-15",
      "channelId": "ideco_gold",
      "asset": 3832947,
      "principal": 2139000,
      "profit": 1693947,
      "profitRate": 0.7919340813464235,
      "reportedDailyChange": 27857,
      "source": "excel_import"
    },
    {
      "date": "2025-08-16",
      "channelId": "ideco_gold",
      "asset": 3832947,
      "principal": 2139000,
      "profit": 1693947,
      "profitRate": 0.7919340813464235,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-08-17",
      "channelId": "ideco_gold",
      "asset": 3832947,
      "principal": 2139000,
      "profit": 1693947,
      "profitRate": 0.7919340813464235,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-08-18",
      "channelId": "ideco_gold",
      "asset": 3846806,
      "principal": 2139000,
      "profit": 1707806,
      "profitRate": 0.7984132772323516,
      "reportedDailyChange": 13859,
      "source": "excel_import"
    },
    {
      "date": "2025-08-19",
      "channelId": "ideco_gold",
      "asset": 3839118,
      "principal": 2139000,
      "profit": 1700118,
      "profitRate": 0.7948190743338008,
      "reportedDailyChange": -7688,
      "source": "excel_import"
    },
    {
      "date": "2025-08-20",
      "channelId": "ideco_gold",
      "asset": 3813322,
      "principal": 2139000,
      "profit": 1674322,
      "profitRate": 0.7827592332865825,
      "reportedDailyChange": -25796,
      "source": "excel_import"
    },
    {
      "date": "2025-08-21",
      "channelId": "ideco_gold",
      "asset": 3850346,
      "principal": 2139000,
      "profit": 1711346,
      "profitRate": 0.8000682561944834,
      "reportedDailyChange": 37024,
      "source": "excel_import"
    },
    {
      "date": "2025-08-22",
      "channelId": "ideco_gold",
      "asset": 3883424,
      "principal": 2139000,
      "profit": 1744424,
      "profitRate": 0.8155324918186069,
      "reportedDailyChange": 33078,
      "source": "excel_import"
    },
    {
      "date": "2025-08-23",
      "channelId": "ideco_gold",
      "asset": 3883424,
      "principal": 2139000,
      "profit": 1744424,
      "profitRate": 0.8155324918186069,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-08-24",
      "channelId": "ideco_gold",
      "asset": 3883424,
      "principal": 2139000,
      "profit": 1744424,
      "profitRate": 0.8155324918186069,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-08-25",
      "channelId": "ideco_gold",
      "asset": 3883424,
      "principal": 2139000,
      "profit": 1744424,
      "profitRate": 0.8155324918186069,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-08-26",
      "channelId": "ideco_gold",
      "asset": 3883424,
      "principal": 2139000,
      "profit": 1744424,
      "profitRate": 0.8155324918186069,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-08-27",
      "channelId": "ideco_gold",
      "asset": 3889797,
      "principal": 2139000,
      "profit": 1750797,
      "profitRate": 0.8185119214586255,
      "reportedDailyChange": 6373,
      "source": "excel_import"
    },
    {
      "date": "2025-08-28",
      "channelId": "ideco_gold",
      "asset": 3883323,
      "principal": 2139000,
      "profit": 1744323,
      "profitRate": 0.8154852734922862,
      "reportedDailyChange": -6474,
      "source": "excel_import"
    },
    {
      "date": "2025-08-29",
      "channelId": "ideco_gold",
      "asset": 3903757,
      "principal": 2139000,
      "profit": 1764757,
      "profitRate": 0.8250383356708743,
      "reportedDailyChange": 20434,
      "source": "excel_import"
    },
    {
      "date": "2025-08-30",
      "channelId": "ideco_gold",
      "asset": 3903757,
      "principal": 2139000,
      "profit": 1764757,
      "profitRate": 0.8250383356708743,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-08-31",
      "channelId": "ideco_gold",
      "asset": 3903757,
      "principal": 2139000,
      "profit": 1764757,
      "profitRate": 0.8250383356708743,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-09-01",
      "channelId": "ideco_gold",
      "asset": 3985694,
      "principal": 2139000,
      "profit": 1846694,
      "profitRate": 0.8633445535296868,
      "reportedDailyChange": 81937,
      "source": "excel_import"
    },
    {
      "date": "2025-09-02",
      "channelId": "ideco_gold",
      "asset": 4018975,
      "principal": 2139000,
      "profit": 1879975,
      "profitRate": 0.878903693314633,
      "reportedDailyChange": 33281,
      "source": "excel_import"
    },
    {
      "date": "2025-09-03",
      "channelId": "ideco_gold",
      "asset": 4089583,
      "principal": 2139000,
      "profit": 1950583,
      "profitRate": 0.9119135109864422,
      "reportedDailyChange": 70608,
      "source": "excel_import"
    },
    {
      "date": "2025-09-04",
      "channelId": "ideco_gold",
      "asset": 4081794,
      "principal": 2139000,
      "profit": 1942794,
      "profitRate": 0.9082720897615708,
      "reportedDailyChange": -7789,
      "source": "excel_import"
    },
    {
      "date": "2025-09-05",
      "channelId": "ideco_gold",
      "asset": 4099699,
      "principal": 2139000,
      "profit": 1960699,
      "profitRate": 0.9166428237494156,
      "reportedDailyChange": 17905,
      "source": "excel_import"
    },
    {
      "date": "2025-09-06",
      "channelId": "ideco_gold",
      "asset": 4099699,
      "principal": 2139000,
      "profit": 1960699,
      "profitRate": 0.9166428237494156,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-09-07",
      "channelId": "ideco_gold",
      "asset": 4099699,
      "principal": 2139000,
      "profit": 1960699,
      "profitRate": 0.9166428237494156,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-09-08",
      "channelId": "ideco_gold",
      "asset": 4145725,
      "principal": 2139000,
      "profit": 2006725,
      "profitRate": 0.9381603553062179,
      "reportedDailyChange": 46026,
      "source": "excel_import"
    },
    {
      "date": "2025-09-09",
      "channelId": "ideco_gold",
      "asset": 4182749,
      "principal": 2139000,
      "profit": 2043749,
      "profitRate": 0.9554693782141187,
      "reportedDailyChange": 37024,
      "source": "excel_import"
    },
    {
      "date": "2025-09-10",
      "channelId": "ideco_gold",
      "asset": 4223717,
      "principal": 2139000,
      "profit": 2084717,
      "profitRate": 0.9746222533894343,
      "reportedDailyChange": 40968,
      "source": "excel_import"
    },
    {
      "date": "2025-09-11",
      "channelId": "ideco_gold",
      "asset": 4241622,
      "principal": 2139000,
      "profit": 2102622,
      "profitRate": 0.9829929873772791,
      "reportedDailyChange": 17905,
      "source": "excel_import"
    },
    {
      "date": "2025-09-12",
      "channelId": "ideco_gold",
      "asset": 4314322,
      "principal": 2162000,
      "profit": 2152322,
      "profitRate": 0.9955235892691952,
      "reportedDailyChange": 72700,
      "source": "excel_import"
    },
    {
      "date": "2025-09-13",
      "channelId": "ideco_gold",
      "asset": 4434728,
      "principal": 2162000,
      "profit": 2272728,
      "profitRate": 1.0512155411655875,
      "reportedDailyChange": 120406,
      "source": "excel_import"
    },
    {
      "date": "2025-09-14",
      "channelId": "ideco_gold",
      "asset": 4384592,
      "principal": 2162000,
      "profit": 2222592,
      "profitRate": 1.0280259019426456,
      "reportedDailyChange": -50136,
      "source": "excel_import"
    },
    {
      "date": "2025-09-15",
      "channelId": "ideco_gold",
      "asset": 4342389,
      "principal": 2162000,
      "profit": 2180389,
      "profitRate": 1.0085055504162812,
      "reportedDailyChange": -42203,
      "source": "excel_import"
    },
    {
      "date": "2025-09-16",
      "channelId": "ideco_gold",
      "asset": 4342389,
      "principal": 2162000,
      "profit": 2180389,
      "profitRate": 1.0085055504162812,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-09-17",
      "channelId": "ideco_gold",
      "asset": 4342389,
      "principal": 2162000,
      "profit": 2180389,
      "profitRate": 1.0085055504162812,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-09-18",
      "channelId": "ideco_gold",
      "asset": 4342389,
      "principal": 2162000,
      "profit": 2180389,
      "profitRate": 1.0085055504162812,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-09-19",
      "channelId": "ideco_gold",
      "asset": 4342389,
      "principal": 2162000,
      "profit": 2180389,
      "profitRate": 1.0085055504162812,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-09-20",
      "channelId": "ideco_gold",
      "asset": 4342389,
      "principal": 2162000,
      "profit": 2180389,
      "profitRate": 1.0085055504162812,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-09-21",
      "channelId": "ideco_gold",
      "asset": 4342389,
      "principal": 2162000,
      "profit": 2180389,
      "profitRate": 1.0085055504162812,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-09-22",
      "channelId": "ideco_gold",
      "asset": 4436660,
      "principal": 2162000,
      "profit": 2274660,
      "profitRate": 1.052109158186864,
      "reportedDailyChange": 94271,
      "source": "excel_import"
    },
    {
      "date": "2025-09-23",
      "channelId": "ideco_gold",
      "asset": 4436660,
      "principal": 2162000,
      "profit": 2274660,
      "profitRate": 1.052109158186864,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-09-24",
      "channelId": "ideco_gold",
      "asset": 4530830,
      "principal": 2162000,
      "profit": 2368830,
      "profitRate": 1.0956660499537465,
      "reportedDailyChange": 94170,
      "source": "excel_import"
    },
    {
      "date": "2025-09-25",
      "channelId": "ideco_gold",
      "asset": 4535813,
      "principal": 2162000,
      "profit": 2373813,
      "profitRate": 1.0979708603145235,
      "reportedDailyChange": 4983,
      "source": "excel_import"
    },
    {
      "date": "2025-09-26",
      "channelId": "ideco_gold",
      "asset": 4559915,
      "principal": 2162000,
      "profit": 2397915,
      "profitRate": 1.1091188714153561,
      "reportedDailyChange": 24102,
      "source": "excel_import"
    },
    {
      "date": "2025-09-27",
      "channelId": "ideco_gold",
      "asset": 4559915,
      "principal": 2162000,
      "profit": 2397915,
      "profitRate": 1.1091188714153561,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-09-28",
      "channelId": "ideco_gold",
      "asset": 4559915,
      "principal": 2162000,
      "profit": 2397915,
      "profitRate": 1.1091188714153561,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-09-29",
      "channelId": "ideco_gold",
      "asset": 4694560,
      "principal": 2162000,
      "profit": 2532560,
      "profitRate": 1.1713968547641074,
      "reportedDailyChange": 134645,
      "source": "excel_import"
    },
    {
      "date": "2025-09-30",
      "channelId": "ideco_gold",
      "asset": 4907205,
      "principal": 2162000,
      "profit": 2745205,
      "profitRate": 1.2697525439407955,
      "reportedDailyChange": 212645,
      "source": "excel_import"
    },
    {
      "date": "2025-10-01",
      "channelId": "ideco_gold",
      "asset": 4855137,
      "principal": 2162000,
      "profit": 2693137,
      "profitRate": 1.2456692876965771,
      "reportedDailyChange": -52068,
      "source": "excel_import"
    },
    {
      "date": "2025-10-02",
      "channelId": "ideco_gold",
      "asset": 4692933,
      "principal": 2162000,
      "profit": 2530933,
      "profitRate": 1.1706443108233118,
      "reportedDailyChange": -162204,
      "source": "excel_import"
    },
    {
      "date": "2025-10-03",
      "channelId": "ideco_gold",
      "asset": 4633949,
      "principal": 2162000,
      "profit": 2471949,
      "profitRate": 1.1433621646623497,
      "reportedDailyChange": -58984,
      "source": "excel_import"
    },
    {
      "date": "2025-10-04",
      "channelId": "ideco_gold",
      "asset": 4633949,
      "principal": 2162000,
      "profit": 2471949,
      "profitRate": 1.1433621646623497,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-10-05",
      "channelId": "ideco_gold",
      "asset": 4633949,
      "principal": 2162000,
      "profit": 2471949,
      "profitRate": 1.1433621646623497,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-10-06",
      "channelId": "ideco_gold",
      "asset": 4752323,
      "principal": 2162000,
      "profit": 2590323,
      "profitRate": 1.198114246068455,
      "reportedDailyChange": 118374,
      "source": "excel_import"
    },
    {
      "date": "2025-10-07",
      "channelId": "ideco_gold",
      "asset": 4888289,
      "principal": 2162000,
      "profit": 2726289,
      "profitRate": 1.2610032377428306,
      "reportedDailyChange": 135966,
      "source": "excel_import"
    },
    {
      "date": "2025-10-08",
      "channelId": "ideco_gold",
      "asset": 5006459,
      "principal": 2162000,
      "profit": 2844459,
      "profitRate": 1.3156609620721553,
      "reportedDailyChange": 118170,
      "source": "excel_import"
    },
    {
      "date": "2025-10-09",
      "channelId": "ideco_gold",
      "asset": 5095646,
      "principal": 2162000,
      "profit": 2933646,
      "profitRate": 1.3569130434782608,
      "reportedDailyChange": 89187,
      "source": "excel_import"
    },
    {
      "date": "2025-10-10",
      "channelId": "ideco_gold",
      "asset": 5019069,
      "principal": 2162000,
      "profit": 2857069,
      "profitRate": 1.3214935245143387,
      "reportedDailyChange": -76577,
      "source": "excel_import"
    },
    {
      "date": "2025-10-11",
      "channelId": "ideco_gold",
      "asset": 5019069,
      "principal": 2162000,
      "profit": 2857069,
      "profitRate": 1.3214935245143387,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-10-12",
      "channelId": "ideco_gold",
      "asset": 5019069,
      "principal": 2162000,
      "profit": 2857069,
      "profitRate": 1.3214935245143387,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-10-13",
      "channelId": "ideco_gold",
      "asset": 5019069,
      "principal": 2162000,
      "profit": 2857069,
      "profitRate": 1.3214935245143387,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-10-14",
      "channelId": "ideco_gold",
      "asset": 5200697,
      "principal": 2162000,
      "profit": 3038697,
      "profitRate": 1.4055027752081406,
      "reportedDailyChange": 181628,
      "source": "excel_import"
    },
    {
      "date": "2025-10-15",
      "channelId": "ideco_gold",
      "asset": 5425851,
      "principal": 2162000,
      "profit": 3263851,
      "profitRate": 1.5096443108233117,
      "reportedDailyChange": 225154,
      "source": "excel_import"
    },
    {
      "date": "2025-10-16",
      "channelId": "ideco_gold",
      "asset": 5790884,
      "principal": 2185000,
      "profit": 3605884,
      "profitRate": 1.6502901601830664,
      "reportedDailyChange": 365033,
      "source": "excel_import"
    },
    {
      "date": "2025-10-17",
      "channelId": "ideco_gold",
      "asset": 6045517,
      "principal": 2185000,
      "profit": 3860517,
      "profitRate": 1.7668270022883295,
      "reportedDailyChange": 254633,
      "source": "excel_import"
    },
    {
      "date": "2025-10-18",
      "channelId": "ideco_gold",
      "asset": 6045517,
      "principal": 2185000,
      "profit": 3860517,
      "profitRate": 1.7668270022883295,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-10-19",
      "channelId": "ideco_gold",
      "asset": 6045517,
      "principal": 2185000,
      "profit": 3860517,
      "profitRate": 1.7668270022883295,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-10-20",
      "channelId": "ideco_gold",
      "asset": 5821616,
      "principal": 2185000,
      "profit": 3636616,
      "profitRate": 1.6643551487414188,
      "reportedDailyChange": -223901,
      "source": "excel_import"
    },
    {
      "date": "2025-10-21",
      "channelId": "ideco_gold",
      "asset": 5593427,
      "principal": 2185000,
      "profit": 3408427,
      "profitRate": 1.559920823798627,
      "reportedDailyChange": -228189,
      "source": "excel_import"
    },
    {
      "date": "2025-10-22",
      "channelId": "ideco_gold",
      "asset": 5240986,
      "principal": 2185000,
      "profit": 3055986,
      "profitRate": 1.3986205949656751,
      "reportedDailyChange": -352441,
      "source": "excel_import"
    },
    {
      "date": "2025-10-23",
      "channelId": "ideco_gold",
      "asset": 5047102,
      "principal": 2185000,
      "profit": 2862102,
      "profitRate": 1.3098864988558352,
      "reportedDailyChange": -193884,
      "source": "excel_import"
    },
    {
      "date": "2025-10-24",
      "channelId": "ideco_gold",
      "asset": 4987783,
      "principal": 2185000,
      "profit": 2802783,
      "profitRate": 1.282738215102975,
      "reportedDailyChange": -59319,
      "source": "excel_import"
    },
    {
      "date": "2025-10-25",
      "channelId": "ideco_gold",
      "asset": 4987783,
      "principal": 2185000,
      "profit": 2802783,
      "profitRate": 1.282738215102975,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-10-26",
      "channelId": "ideco_gold",
      "asset": 4987783,
      "principal": 2185000,
      "profit": 2802783,
      "profitRate": 1.282738215102975,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-10-27",
      "channelId": "ideco_gold",
      "asset": 4991459,
      "principal": 2185000,
      "profit": 2806459,
      "profitRate": 1.284420594965675,
      "reportedDailyChange": 3676,
      "source": "excel_import"
    },
    {
      "date": "2025-10-28",
      "channelId": "ideco_gold",
      "asset": 4722227,
      "principal": 2185000,
      "profit": 2537227,
      "profitRate": 1.1612022883295194,
      "reportedDailyChange": -269232,
      "source": "excel_import"
    },
    {
      "date": "2025-10-29",
      "channelId": "ideco_gold",
      "asset": 4866797,
      "principal": 2185000,
      "profit": 2681797,
      "profitRate": 1.22736704805492,
      "reportedDailyChange": 144570,
      "source": "excel_import"
    },
    {
      "date": "2025-10-30",
      "channelId": "ideco_gold",
      "asset": 4866797,
      "principal": 2185000,
      "profit": 2681797,
      "profitRate": 1.22736704805492,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-10-31",
      "channelId": "ideco_gold",
      "asset": 4959502,
      "principal": 2185000,
      "profit": 2774502,
      "profitRate": 1.2697949656750571,
      "reportedDailyChange": 92705,
      "source": "excel_import"
    },
    {
      "date": "2025-11-01",
      "channelId": "ideco_gold",
      "asset": 4959502,
      "principal": 2185000,
      "profit": 2774502,
      "profitRate": 1.2697949656750571,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-11-02",
      "channelId": "ideco_gold",
      "asset": 4959502,
      "principal": 2185000,
      "profit": 2774502,
      "profitRate": 1.2697949656750571,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-11-03",
      "channelId": "ideco_gold",
      "asset": 4959502,
      "principal": 2185000,
      "profit": 2774502,
      "profitRate": 1.2697949656750571,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-11-04",
      "channelId": "ideco_gold",
      "asset": 4934590,
      "principal": 2185000,
      "profit": 2749590,
      "profitRate": 1.2583935926773455,
      "reportedDailyChange": -24912,
      "source": "excel_import"
    },
    {
      "date": "2025-11-05",
      "channelId": "ideco_gold",
      "asset": 4878028,
      "principal": 2185000,
      "profit": 2693028,
      "profitRate": 1.2325070938215104,
      "reportedDailyChange": -56562,
      "source": "excel_import"
    },
    {
      "date": "2025-11-06",
      "channelId": "ideco_gold",
      "asset": 4890790,
      "principal": 2185000,
      "profit": 2705790,
      "profitRate": 1.2383478260869565,
      "reportedDailyChange": 12762,
      "source": "excel_import"
    },
    {
      "date": "2025-11-07",
      "channelId": "ideco_gold",
      "asset": 5012797,
      "principal": 2185000,
      "profit": 2827797,
      "profitRate": 1.2941862700228832,
      "reportedDailyChange": 122007,
      "source": "excel_import"
    },
    {
      "date": "2025-11-08",
      "channelId": "ideco_gold",
      "asset": 5012797,
      "principal": 2185000,
      "profit": 2827797,
      "profitRate": 1.2941862700228832,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-11-09",
      "channelId": "ideco_gold",
      "asset": 5012797,
      "principal": 2185000,
      "profit": 2827797,
      "profitRate": 1.2941862700228832,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-11-10",
      "channelId": "ideco_gold",
      "asset": 5012797,
      "principal": 2185000,
      "profit": 2827797,
      "profitRate": 1.2941862700228832,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-11-11",
      "channelId": "ideco_gold",
      "asset": 5136234,
      "principal": 2185000,
      "profit": 2951234,
      "profitRate": 1.350679176201373,
      "reportedDailyChange": 123437,
      "source": "excel_import"
    },
    {
      "date": "2025-11-12",
      "channelId": "ideco_gold",
      "asset": 5107748,
      "principal": 2185000,
      "profit": 2922748,
      "profitRate": 1.337642105263158,
      "reportedDailyChange": -28486,
      "source": "excel_import"
    },
    {
      "date": "2025-11-13",
      "channelId": "ideco_gold",
      "asset": 5219750,
      "principal": 2185000,
      "profit": 3034750,
      "profitRate": 1.3889016018306637,
      "reportedDailyChange": 112002,
      "source": "excel_import"
    },
    {
      "date": "2025-11-14",
      "channelId": "ideco_gold",
      "asset": 5225732,
      "principal": 2208000,
      "profit": 3017732,
      "profitRate": 1.3667264492753624,
      "reportedDailyChange": 5982,
      "source": "excel_import"
    },
    {
      "date": "2025-11-15",
      "channelId": "ideco_gold",
      "asset": 5225732,
      "principal": 2208000,
      "profit": 3017732,
      "profitRate": 1.3667264492753624,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-11-16",
      "channelId": "ideco_gold",
      "asset": 5225732,
      "principal": 2208000,
      "profit": 3017732,
      "profitRate": 1.3667264492753624,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-11-17",
      "channelId": "ideco_gold",
      "asset": 5043817,
      "principal": 2208000,
      "profit": 2835817,
      "profitRate": 1.28433740942029,
      "reportedDailyChange": -181915,
      "source": "excel_import"
    },
    {
      "date": "2025-11-18",
      "channelId": "ideco_gold",
      "asset": 4954397,
      "principal": 2208000,
      "profit": 2746397,
      "profitRate": 1.2438392210144928,
      "reportedDailyChange": -89420,
      "source": "excel_import"
    },
    {
      "date": "2025-11-19",
      "channelId": "ideco_gold",
      "asset": 5069454,
      "principal": 2208000,
      "profit": 2861454,
      "profitRate": 1.2959483695652174,
      "reportedDailyChange": 115057,
      "source": "excel_import"
    },
    {
      "date": "2025-11-20",
      "channelId": "ideco_gold",
      "asset": 5091296,
      "principal": 2208000,
      "profit": 2883296,
      "profitRate": 1.3058405797101449,
      "reportedDailyChange": 21842,
      "source": "excel_import"
    },
    {
      "date": "2025-11-21",
      "channelId": "ideco_gold",
      "asset": 5018693,
      "principal": 2208000,
      "profit": 2810693,
      "profitRate": 1.272958786231884,
      "reportedDailyChange": -72603,
      "source": "excel_import"
    },
    {
      "date": "2025-11-22",
      "channelId": "ideco_gold",
      "asset": 5018693,
      "principal": 2208000,
      "profit": 2810693,
      "profitRate": 1.272958786231884,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-11-23",
      "channelId": "ideco_gold",
      "asset": 5018693,
      "principal": 2208000,
      "profit": 2810693,
      "profitRate": 1.272958786231884,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-11-24",
      "channelId": "ideco_gold",
      "asset": 5018693,
      "principal": 2208000,
      "profit": 2810693,
      "profitRate": 1.272958786231884,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-11-25",
      "channelId": "ideco_gold",
      "asset": 5142569,
      "principal": 2208000,
      "profit": 2934569,
      "profitRate": 1.3290620471014494,
      "reportedDailyChange": 123876,
      "source": "excel_import"
    },
    {
      "date": "2025-11-26",
      "channelId": "ideco_gold",
      "asset": 5156720,
      "principal": 2208000,
      "profit": 2948720,
      "profitRate": 1.3354710144927535,
      "reportedDailyChange": 14151,
      "source": "excel_import"
    },
    {
      "date": "2025-11-27",
      "channelId": "ideco_gold",
      "asset": 5156618,
      "principal": 2208000,
      "profit": 2948618,
      "profitRate": 1.3354248188405797,
      "reportedDailyChange": -102,
      "source": "excel_import"
    },
    {
      "date": "2025-11-28",
      "channelId": "ideco_gold",
      "asset": 5210864,
      "principal": 2208000,
      "profit": 3002864,
      "profitRate": 1.3599927536231884,
      "reportedDailyChange": 54246,
      "source": "excel_import"
    },
    {
      "date": "2025-11-29",
      "channelId": "ideco_gold",
      "asset": 5210864,
      "principal": 2208000,
      "profit": 3002864,
      "profitRate": 1.3599927536231884,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-11-30",
      "channelId": "ideco_gold",
      "asset": 5210864,
      "principal": 2208000,
      "profit": 3002864,
      "profitRate": 1.3599927536231884,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-12-01",
      "channelId": "ideco_gold",
      "asset": 5258446,
      "principal": 2208000,
      "profit": 3050446,
      "profitRate": 1.3815425724637682,
      "reportedDailyChange": 47582,
      "source": "excel_import"
    },
    {
      "date": "2025-12-02",
      "channelId": "ideco_gold",
      "asset": 5207890,
      "principal": 2208000,
      "profit": 2999890,
      "profitRate": 1.3586458333333333,
      "reportedDailyChange": -50556,
      "source": "excel_import"
    },
    {
      "date": "2025-12-03",
      "channelId": "ideco_gold",
      "asset": 5198764,
      "principal": 2208000,
      "profit": 2990764,
      "profitRate": 1.3545126811594204,
      "reportedDailyChange": -9126,
      "source": "excel_import"
    },
    {
      "date": "2025-12-04",
      "channelId": "ideco_gold",
      "asset": 5166359,
      "principal": 2208000,
      "profit": 2958359,
      "profitRate": 1.3398365036231885,
      "reportedDailyChange": -32405,
      "source": "excel_import"
    },
    {
      "date": "2025-12-05",
      "channelId": "ideco_gold",
      "asset": 5193432,
      "principal": 2208000,
      "profit": 2985432,
      "profitRate": 1.3520978260869565,
      "reportedDailyChange": 27073,
      "source": "excel_import"
    },
    {
      "date": "2025-12-06",
      "channelId": "ideco_gold",
      "asset": 5193432,
      "principal": 2208000,
      "profit": 2985432,
      "profitRate": 1.3520978260869565,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-12-07",
      "channelId": "ideco_gold",
      "asset": 5193432,
      "principal": 2208000,
      "profit": 2985432,
      "profitRate": 1.3520978260869565,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-12-08",
      "channelId": "ideco_gold",
      "asset": 5197021,
      "principal": 2208000,
      "profit": 2989021,
      "profitRate": 1.3537232789855072,
      "reportedDailyChange": 3589,
      "source": "excel_import"
    },
    {
      "date": "2025-12-09",
      "channelId": "ideco_gold",
      "asset": 5190458,
      "principal": 2208000,
      "profit": 2982458,
      "profitRate": 1.3507509057971014,
      "reportedDailyChange": -6563,
      "source": "excel_import"
    },
    {
      "date": "2025-12-10",
      "channelId": "ideco_gold",
      "asset": 5222760,
      "principal": 2208000,
      "profit": 3014760,
      "profitRate": 1.3653804347826086,
      "reportedDailyChange": 32302,
      "source": "excel_import"
    },
    {
      "date": "2025-12-11",
      "channelId": "ideco_gold",
      "asset": 5296388,
      "principal": 2208000,
      "profit": 3088388,
      "profitRate": 1.3987264492753624,
      "reportedDailyChange": 73628,
      "source": "excel_import"
    },
    {
      "date": "2025-12-12",
      "channelId": "ideco_gold",
      "asset": 5296388,
      "principal": 2208000,
      "profit": 3088388,
      "profitRate": 1.3987264492753624,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-12-13",
      "channelId": "ideco_gold",
      "asset": 5296388,
      "principal": 2208000,
      "profit": 3088388,
      "profitRate": 1.3987264492753624,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-12-14",
      "channelId": "ideco_gold",
      "asset": 5296388,
      "principal": 2208000,
      "profit": 3088388,
      "profitRate": 1.3987264492753624,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-12-15",
      "channelId": "ideco_gold",
      "asset": 5379821,
      "principal": 2231000,
      "profit": 3148821,
      "profitRate": 1.4113944419542805,
      "reportedDailyChange": 83433,
      "source": "excel_import"
    },
    {
      "date": "2025-12-16",
      "channelId": "ideco_gold",
      "asset": 5300524,
      "principal": 2231000,
      "profit": 3069524,
      "profitRate": 1.3758511878081578,
      "reportedDailyChange": -79297,
      "source": "excel_import"
    },
    {
      "date": "2025-12-17",
      "channelId": "ideco_gold",
      "asset": 5369317,
      "principal": 2231000,
      "profit": 3138317,
      "profitRate": 1.4066862393545496,
      "reportedDailyChange": 68793,
      "source": "excel_import"
    },
    {
      "date": "2025-12-18",
      "channelId": "ideco_gold",
      "asset": 5384867,
      "principal": 2231000,
      "profit": 3153867,
      "profitRate": 1.413656207978485,
      "reportedDailyChange": 15550,
      "source": "excel_import"
    },
    {
      "date": "2025-12-19",
      "channelId": "ideco_gold",
      "asset": 5377040,
      "principal": 2231000,
      "profit": 3146040,
      "profitRate": 1.4101479157328551,
      "reportedDailyChange": -7827,
      "source": "excel_import"
    },
    {
      "date": "2025-12-20",
      "channelId": "ideco_gold",
      "asset": 5377040,
      "principal": 2231000,
      "profit": 3146040,
      "profitRate": 1.4101479157328551,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-12-21",
      "channelId": "ideco_gold",
      "asset": 5377040,
      "principal": 2231000,
      "profit": 3146040,
      "profitRate": 1.4101479157328551,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-12-22",
      "channelId": "ideco_gold",
      "asset": 5528631,
      "principal": 2231000,
      "profit": 3297631,
      "profitRate": 1.4780954728821156,
      "reportedDailyChange": 151591,
      "source": "excel_import"
    },
    {
      "date": "2025-12-23",
      "channelId": "ideco_gold",
      "asset": 5571266,
      "principal": 2231000,
      "profit": 3340266,
      "profitRate": 1.4972057373375167,
      "reportedDailyChange": 42635,
      "source": "excel_import"
    },
    {
      "date": "2025-12-24",
      "channelId": "ideco_gold",
      "asset": 5601028,
      "principal": 2231000,
      "profit": 3370028,
      "profitRate": 1.510545943523084,
      "reportedDailyChange": 29762,
      "source": "excel_import"
    },
    {
      "date": "2025-12-25",
      "channelId": "ideco_gold",
      "asset": 5643766,
      "principal": 2231000,
      "profit": 3412766,
      "profitRate": 1.5297023756163155,
      "reportedDailyChange": 42738,
      "source": "excel_import"
    },
    {
      "date": "2025-12-26",
      "channelId": "ideco_gold",
      "asset": 5422765,
      "principal": 2231000,
      "profit": 3191765,
      "profitRate": 1.4306432093231736,
      "reportedDailyChange": -221001,
      "source": "excel_import"
    },
    {
      "date": "2025-12-27",
      "channelId": "ideco_gold",
      "asset": 5422765,
      "principal": 2231000,
      "profit": 3191765,
      "profitRate": 1.4306432093231736,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-12-28",
      "channelId": "ideco_gold",
      "asset": 5422765,
      "principal": 2231000,
      "profit": 3191765,
      "profitRate": 1.4306432093231736,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-12-29",
      "channelId": "ideco_gold",
      "asset": 5422765,
      "principal": 2231000,
      "profit": 3191765,
      "profitRate": 1.4306432093231736,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-12-30",
      "channelId": "ideco_gold",
      "asset": 5422765,
      "principal": 2231000,
      "profit": 3191765,
      "profitRate": 1.4306432093231736,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2025-12-31",
      "channelId": "ideco_gold",
      "asset": 5422765,
      "principal": 2231000,
      "profit": 3191765,
      "profitRate": 1.4306432093231736,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-01-01",
      "channelId": "ideco_gold",
      "asset": 5422765,
      "principal": 2231000,
      "profit": 3191765,
      "profitRate": 1.4306432093231736,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-01-02",
      "channelId": "ideco_gold",
      "asset": 5422765,
      "principal": 2231000,
      "profit": 3191765,
      "profitRate": 1.4306432093231736,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-01-03",
      "channelId": "ideco_gold",
      "asset": 5422765,
      "principal": 2231000,
      "profit": 3191765,
      "profitRate": 1.4306432093231736,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-01-04",
      "channelId": "ideco_gold",
      "asset": 5422765,
      "principal": 2231000,
      "profit": 3191765,
      "profitRate": 1.4306432093231736,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-01-05",
      "channelId": "ideco_gold",
      "asset": 5542843,
      "principal": 2231000,
      "profit": 3311843,
      "profitRate": 1.484465710443747,
      "reportedDailyChange": 120078,
      "source": "excel_import"
    },
    {
      "date": "2026-01-06",
      "channelId": "ideco_gold",
      "asset": 5549949,
      "principal": 2231000,
      "profit": 3318949,
      "profitRate": 1.487650829224563,
      "reportedDailyChange": 7106,
      "source": "excel_import"
    },
    {
      "date": "2026-01-07",
      "channelId": "ideco_gold",
      "asset": 5549949,
      "principal": 2231000,
      "profit": 3318949,
      "profitRate": 1.487650829224563,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-01-08",
      "channelId": "ideco_gold",
      "asset": 5512257,
      "principal": 2231000,
      "profit": 3281257,
      "profitRate": 1.4707561631555357,
      "reportedDailyChange": -37692,
      "source": "excel_import"
    },
    {
      "date": "2026-01-09",
      "channelId": "ideco_gold",
      "asset": 5602985,
      "principal": 2231000,
      "profit": 3371985,
      "profitRate": 1.5114231286418647,
      "reportedDailyChange": 90728,
      "source": "excel_import"
    },
    {
      "date": "2026-01-10",
      "channelId": "ideco_gold",
      "asset": 5602985,
      "principal": 2231000,
      "profit": 3371985,
      "profitRate": 1.5114231286418647,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-01-11",
      "channelId": "ideco_gold",
      "asset": 5602985,
      "principal": 2231000,
      "profit": 3371985,
      "profitRate": 1.5114231286418647,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-01-12",
      "channelId": "ideco_gold",
      "asset": 5602985,
      "principal": 2231000,
      "profit": 3371985,
      "profitRate": 1.5114231286418647,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-01-13",
      "channelId": "ideco_gold",
      "asset": 5786912,
      "principal": 2231000,
      "profit": 3555912,
      "profitRate": 1.5938646346929628,
      "reportedDailyChange": 183927,
      "source": "excel_import"
    },
    {
      "date": "2026-01-14",
      "channelId": "ideco_gold",
      "asset": 5896898,
      "principal": 2231000,
      "profit": 3665898,
      "profitRate": 1.6431636037651278,
      "reportedDailyChange": 109986,
      "source": "excel_import"
    },
    {
      "date": "2026-01-15",
      "channelId": "ideco_gold",
      "asset": 5817601,
      "principal": 2231000,
      "profit": 3586601,
      "profitRate": 1.607620349619005,
      "reportedDailyChange": -79297,
      "source": "excel_import"
    },
    {
      "date": "2026-01-16",
      "channelId": "ideco_gold",
      "asset": 5808435,
      "principal": 2231000,
      "profit": 3577435,
      "profitRate": 1.6035118780815778,
      "reportedDailyChange": -9166,
      "source": "excel_import"
    },
    {
      "date": "2026-01-17",
      "channelId": "ideco_gold",
      "asset": 5808435,
      "principal": 2231000,
      "profit": 3577435,
      "profitRate": 1.6035118780815778,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-01-18",
      "channelId": "ideco_gold",
      "asset": 5808435,
      "principal": 2231000,
      "profit": 3577435,
      "profitRate": 1.6035118780815778,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-01-19",
      "channelId": "ideco_gold",
      "asset": 5857455,
      "principal": 2231000,
      "profit": 3626455,
      "profitRate": 1.6254840878529808,
      "reportedDailyChange": 49020,
      "source": "excel_import"
    },
    {
      "date": "2026-01-20",
      "channelId": "ideco_gold",
      "asset": 5994286,
      "principal": 2254000,
      "profit": 3740286,
      "profitRate": 1.659399290150843,
      "reportedDailyChange": 136831,
      "source": "excel_import"
    },
    {
      "date": "2026-01-21",
      "channelId": "ideco_gold",
      "asset": 6182638,
      "principal": 2254000,
      "profit": 3928638,
      "profitRate": 1.7429627329192547,
      "reportedDailyChange": 188352,
      "source": "excel_import"
    },
    {
      "date": "2026-01-22",
      "channelId": "ideco_gold",
      "asset": 6246628,
      "principal": 2254000,
      "profit": 3992628,
      "profitRate": 1.7713522626441882,
      "reportedDailyChange": 63990,
      "source": "excel_import"
    },
    {
      "date": "2026-01-23",
      "channelId": "ideco_gold",
      "asset": 6246628,
      "principal": 2254000,
      "profit": 3992628,
      "profitRate": 1.7713522626441882,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-01-24",
      "channelId": "ideco_gold",
      "asset": 6246628,
      "principal": 2254000,
      "profit": 3992628,
      "profitRate": 1.7713522626441882,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-01-25",
      "channelId": "ideco_gold",
      "asset": 6246628,
      "principal": 2254000,
      "profit": 3992628,
      "profitRate": 1.7713522626441882,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-01-26",
      "channelId": "ideco_gold",
      "asset": 6244974,
      "principal": 2254000,
      "profit": 3990974,
      "profitRate": 1.7706184560780833,
      "reportedDailyChange": -1654,
      "source": "excel_import"
    },
    {
      "date": "2026-01-27",
      "channelId": "ideco_gold",
      "asset": 6335945,
      "principal": 2254000,
      "profit": 4081945,
      "profitRate": 1.8109782608695653,
      "reportedDailyChange": 90971,
      "source": "excel_import"
    },
    {
      "date": "2026-01-28",
      "channelId": "ideco_gold",
      "asset": 6503725,
      "principal": 2254000,
      "profit": 4249725,
      "profitRate": 1.8854148181011534,
      "reportedDailyChange": 167780,
      "source": "excel_import"
    },
    {
      "date": "2026-01-29",
      "channelId": "ideco_gold",
      "asset": 6921883,
      "principal": 2254000,
      "profit": 4667883,
      "profitRate": 2.070933007985803,
      "reportedDailyChange": 418158,
      "source": "excel_import"
    },
    {
      "date": "2026-01-30",
      "channelId": "ideco_gold",
      "asset": 6451830,
      "principal": 2254000,
      "profit": 4197830,
      "profitRate": 1.8623913043478262,
      "reportedDailyChange": -470053,
      "source": "excel_import"
    },
    {
      "date": "2026-01-31",
      "channelId": "ideco_gold",
      "asset": 6451830,
      "principal": 2254000,
      "profit": 4197830,
      "profitRate": 1.8623913043478262,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-02-01",
      "channelId": "ideco_gold",
      "asset": 6451830,
      "principal": 2254000,
      "profit": 4197830,
      "profitRate": 1.8623913043478262,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-02-02",
      "channelId": "ideco_gold",
      "asset": 5551111,
      "principal": 2254000,
      "profit": 3297111,
      "profitRate": 1.462782165039929,
      "reportedDailyChange": -900719,
      "source": "excel_import"
    },
    {
      "date": "2026-02-03",
      "channelId": "ideco_gold",
      "asset": 6102521,
      "principal": 2254000,
      "profit": 3848521,
      "profitRate": 1.7074183673469387,
      "reportedDailyChange": 551410,
      "source": "excel_import"
    },
    {
      "date": "2026-02-04",
      "channelId": "ideco_gold",
      "asset": 6462478,
      "principal": 2254000,
      "profit": 4208478,
      "profitRate": 1.8671153504880214,
      "reportedDailyChange": 359957,
      "source": "excel_import"
    },
    {
      "date": "2026-02-05",
      "channelId": "ideco_gold",
      "asset": 6291080,
      "principal": 2254000,
      "profit": 4037080,
      "profitRate": 1.7910736468500443,
      "reportedDailyChange": -171398,
      "source": "excel_import"
    },
    {
      "date": "2026-02-06",
      "channelId": "ideco_gold",
      "asset": 6173954,
      "principal": 2254000,
      "profit": 3919954,
      "profitRate": 1.7391100266193433,
      "reportedDailyChange": -117126,
      "source": "excel_import"
    },
    {
      "date": "2026-02-07",
      "channelId": "ideco_gold",
      "asset": 6173954,
      "principal": 2254000,
      "profit": 3919954,
      "profitRate": 1.7391100266193433,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-02-08",
      "channelId": "ideco_gold",
      "asset": 6173954,
      "principal": 2254000,
      "profit": 3919954,
      "profitRate": 1.7391100266193433,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-02-09",
      "channelId": "ideco_gold",
      "asset": 6358171,
      "principal": 2254000,
      "profit": 4104171,
      "profitRate": 1.8208389529724933,
      "reportedDailyChange": 184217,
      "source": "excel_import"
    },
    {
      "date": "2026-02-10",
      "channelId": "ideco_gold",
      "asset": 6316717,
      "principal": 2254000,
      "profit": 4062717,
      "profitRate": 1.8024476486246672,
      "reportedDailyChange": -41454,
      "source": "excel_import"
    },
    {
      "date": "2026-02-11",
      "channelId": "ideco_gold",
      "asset": 6316717,
      "principal": 2254000,
      "profit": 4062717,
      "profitRate": 1.8024476486246672,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-02-12",
      "channelId": "ideco_gold",
      "asset": 6271128,
      "principal": 2254000,
      "profit": 4017128,
      "profitRate": 1.7822218278615793,
      "reportedDailyChange": -45589,
      "source": "excel_import"
    },
    {
      "date": "2026-02-13",
      "channelId": "ideco_gold",
      "asset": 6148355,
      "principal": 2277000,
      "profit": 3871355,
      "profitRate": 1.7001998243302592,
      "reportedDailyChange": -122773,
      "source": "excel_import"
    },
    {
      "date": "2026-02-14",
      "channelId": "ideco_gold",
      "asset": 6148355,
      "principal": 2277000,
      "profit": 3871355,
      "profitRate": 1.7001998243302592,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-02-15",
      "channelId": "ideco_gold",
      "asset": 6148355,
      "principal": 2277000,
      "profit": 3871355,
      "profitRate": 1.7001998243302592,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-02-16",
      "channelId": "ideco_gold",
      "asset": 6148355,
      "principal": 2277000,
      "profit": 3871355,
      "profitRate": 1.7001998243302592,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-02-17",
      "channelId": "ideco_gold",
      "asset": 6020311,
      "principal": 2277000,
      "profit": 3743311,
      "profitRate": 1.6439661835748793,
      "reportedDailyChange": -128044,
      "source": "excel_import"
    },
    {
      "date": "2026-02-18",
      "channelId": "ideco_gold",
      "asset": 6072504,
      "principal": 2277000,
      "profit": 3795504,
      "profitRate": 1.6668880105401844,
      "reportedDailyChange": 52193,
      "source": "excel_import"
    },
    {
      "date": "2026-02-19",
      "channelId": "ideco_gold",
      "asset": 6235515,
      "principal": 2277000,
      "profit": 3958515,
      "profitRate": 1.7384782608695653,
      "reportedDailyChange": 163011,
      "source": "excel_import"
    },
    {
      "date": "2026-02-20",
      "channelId": "ideco_gold",
      "asset": 6241948,
      "principal": 2277000,
      "profit": 3964948,
      "profitRate": 1.7413034694773826,
      "reportedDailyChange": 6433,
      "source": "excel_import"
    },
    {
      "date": "2026-02-21",
      "channelId": "ideco_gold",
      "asset": 6241948,
      "principal": 2277000,
      "profit": 3964948,
      "profitRate": 1.7413034694773826,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-02-22",
      "channelId": "ideco_gold",
      "asset": 6241948,
      "principal": 2277000,
      "profit": 3964948,
      "profitRate": 1.7413034694773826,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-02-23",
      "channelId": "ideco_gold",
      "asset": 6241948,
      "principal": 2277000,
      "profit": 3964948,
      "profitRate": 1.7413034694773826,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-02-24",
      "channelId": "ideco_gold",
      "asset": 6413883,
      "principal": 2277000,
      "profit": 4136883,
      "profitRate": 1.8168129117259553,
      "reportedDailyChange": 171935,
      "source": "excel_import"
    },
    {
      "date": "2026-02-25",
      "channelId": "ideco_gold",
      "asset": 6467321,
      "principal": 2277000,
      "profit": 4190321,
      "profitRate": 1.8402815107597716,
      "reportedDailyChange": 53438,
      "source": "excel_import"
    },
    {
      "date": "2026-02-26",
      "channelId": "ideco_gold",
      "asset": 6459435,
      "principal": 2277000,
      "profit": 4182435,
      "profitRate": 1.836818181818182,
      "reportedDailyChange": -7886,
      "source": "excel_import"
    },
    {
      "date": "2026-02-27",
      "channelId": "ideco_gold",
      "asset": 6446257,
      "principal": 2277000,
      "profit": 4169257,
      "profitRate": 1.8310307422046552,
      "reportedDailyChange": -13178,
      "source": "excel_import"
    },
    {
      "date": "2026-02-28",
      "channelId": "ideco_gold",
      "asset": 6446257,
      "principal": 2277000,
      "profit": 4169257,
      "profitRate": 1.8310307422046552,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-03-01",
      "channelId": "ideco_gold",
      "asset": 6446257,
      "principal": 2277000,
      "profit": 4169257,
      "profitRate": 1.8310307422046552,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-03-02",
      "channelId": "ideco_gold",
      "asset": 6721540,
      "principal": 2277000,
      "profit": 4444540,
      "profitRate": 1.9519279754062362,
      "reportedDailyChange": 275283,
      "source": "excel_import"
    },
    {
      "date": "2026-03-03",
      "channelId": "ideco_gold",
      "asset": 6667894,
      "principal": 2277000,
      "profit": 4390894,
      "profitRate": 1.9283680281071585,
      "reportedDailyChange": -53646,
      "source": "excel_import"
    },
    {
      "date": "2026-03-04",
      "channelId": "ideco_gold",
      "asset": 6455907,
      "principal": 2277000,
      "profit": 4178907,
      "profitRate": 1.8352687747035572,
      "reportedDailyChange": -211987,
      "source": "excel_import"
    },
    {
      "date": "2026-03-05",
      "channelId": "ideco_gold",
      "asset": 6415336,
      "principal": 2277000,
      "profit": 4138336,
      "profitRate": 1.8174510320597277,
      "reportedDailyChange": -40571,
      "source": "excel_import"
    },
    {
      "date": "2026-03-06",
      "channelId": "ideco_gold",
      "asset": 6415336,
      "principal": 2277000,
      "profit": 4138336,
      "profitRate": 1.8174510320597277,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-03-07",
      "channelId": "ideco_gold",
      "asset": 6415336,
      "principal": 2277000,
      "profit": 4138336,
      "profitRate": 1.8174510320597277,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-03-08",
      "channelId": "ideco_gold",
      "asset": 6415336,
      "principal": 2277000,
      "profit": 4138336,
      "profitRate": 1.8174510320597277,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-03-09",
      "channelId": "ideco_gold",
      "asset": 6429551,
      "principal": 2277000,
      "profit": 4152551,
      "profitRate": 1.823693895476504,
      "reportedDailyChange": 14215,
      "source": "excel_import"
    },
    {
      "date": "2026-03-10",
      "channelId": "ideco_gold",
      "asset": 6429448,
      "principal": 2277000,
      "profit": 4152448,
      "profitRate": 1.8236486605182258,
      "reportedDailyChange": -103,
      "source": "excel_import"
    },
    {
      "date": "2026-03-11",
      "channelId": "ideco_gold",
      "asset": 6482885,
      "principal": 2277000,
      "profit": 4205885,
      "profitRate": 1.84711682037769,
      "reportedDailyChange": 53437,
      "source": "excel_import"
    },
    {
      "date": "2026-03-12",
      "channelId": "ideco_gold",
      "asset": 6417411,
      "principal": 2277000,
      "profit": 4140411,
      "profitRate": 1.8183623188405797,
      "reportedDailyChange": -65474,
      "source": "excel_import"
    },
    {
      "date": "2026-03-13",
      "channelId": "ideco_gold",
      "asset": 6417411,
      "principal": 2277000,
      "profit": 4140411,
      "profitRate": 1.8183623188405797,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-03-14",
      "channelId": "ideco_gold",
      "asset": 6417411,
      "principal": 2277000,
      "profit": 4140411,
      "profitRate": 1.8183623188405797,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-03-15",
      "channelId": "ideco_gold",
      "asset": 6417411,
      "principal": 2277000,
      "profit": 4140411,
      "profitRate": 1.8183623188405797,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-03-16",
      "channelId": "ideco_gold",
      "asset": 6295594,
      "principal": 2277000,
      "profit": 4018594,
      "profitRate": 1.7648634167764603,
      "reportedDailyChange": -121817,
      "source": "excel_import"
    },
    {
      "date": "2026-03-17",
      "channelId": "ideco_gold",
      "asset": 6285738,
      "principal": 2300000,
      "profit": 3985738,
      "profitRate": 1.7329295652173913,
      "reportedDailyChange": -9856,
      "source": "excel_import"
    },
    {
      "date": "2026-03-18",
      "channelId": "ideco_gold",
      "asset": 6280425,
      "principal": 2300000,
      "profit": 3980425,
      "profitRate": 1.7306195652173912,
      "reportedDailyChange": -5313,
      "source": "excel_import"
    },
    {
      "date": "2026-03-19",
      "channelId": "ideco_gold",
      "asset": 6056209,
      "principal": 2300000,
      "profit": 3756209,
      "profitRate": 1.633134347826087,
      "reportedDailyChange": -224216,
      "source": "excel_import"
    },
    {
      "date": "2026-03-20",
      "channelId": "ideco_gold",
      "asset": 6056209,
      "principal": 2300000,
      "profit": 3756209,
      "profitRate": 1.633134347826087,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-03-21",
      "channelId": "ideco_gold",
      "asset": 6056209,
      "principal": 2300000,
      "profit": 3756209,
      "profitRate": 1.633134347826087,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-03-22",
      "channelId": "ideco_gold",
      "asset": 6056209,
      "principal": 2300000,
      "profit": 3756209,
      "profitRate": 1.633134347826087,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-03-23",
      "channelId": "ideco_gold",
      "asset": 5359403,
      "principal": 2300000,
      "profit": 3059403,
      "profitRate": 1.3301752173913044,
      "reportedDailyChange": -696806,
      "source": "excel_import"
    },
    {
      "date": "2026-03-24",
      "channelId": "ideco_gold",
      "asset": 5460419,
      "principal": 2300000,
      "profit": 3160419,
      "profitRate": 1.3740952173913044,
      "reportedDailyChange": 101016,
      "source": "excel_import"
    },
    {
      "date": "2026-03-25",
      "channelId": "ideco_gold",
      "asset": 5738580,
      "principal": 2300000,
      "profit": 3438580,
      "profitRate": 1.4950347826086956,
      "reportedDailyChange": 278161,
      "source": "excel_import"
    },
    {
      "date": "2026-03-26",
      "channelId": "ideco_gold",
      "asset": 5596948,
      "principal": 2300000,
      "profit": 3296948,
      "profitRate": 1.433455652173913,
      "reportedDailyChange": -141632,
      "source": "excel_import"
    },
    {
      "date": "2026-03-27",
      "channelId": "ideco_gold",
      "asset": 5634959,
      "principal": 2300000,
      "profit": 3334959,
      "profitRate": 1.4499821739130434,
      "reportedDailyChange": 38011,
      "source": "excel_import"
    },
    {
      "date": "2026-03-28",
      "channelId": "ideco_gold",
      "asset": 5634959,
      "principal": 2300000,
      "profit": 3334959,
      "profitRate": 1.4499821739130434,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-03-29",
      "channelId": "ideco_gold",
      "asset": 5634959,
      "principal": 2300000,
      "profit": 3334959,
      "profitRate": 1.4499821739130434,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-03-30",
      "channelId": "ideco_gold",
      "asset": 5736913,
      "principal": 2300000,
      "profit": 3436913,
      "profitRate": 1.49431,
      "reportedDailyChange": 101954,
      "source": "excel_import"
    },
    {
      "date": "2026-03-31",
      "channelId": "ideco_gold",
      "asset": 5755138,
      "principal": 2300000,
      "profit": 3455138,
      "profitRate": 1.5022339130434783,
      "reportedDailyChange": 18225,
      "source": "excel_import"
    },
    {
      "date": "2026-04-01",
      "channelId": "ideco_gold",
      "asset": 5899165,
      "principal": 2300000,
      "profit": 3599165,
      "profitRate": 1.564854347826087,
      "reportedDailyChange": 144027,
      "source": "excel_import"
    },
    {
      "date": "2026-04-02",
      "channelId": "ideco_gold",
      "asset": 5787526,
      "principal": 2300000,
      "profit": 3487526,
      "profitRate": 1.516315652173913,
      "reportedDailyChange": -111639,
      "source": "excel_import"
    },
    {
      "date": "2026-04-03",
      "channelId": "ideco_gold",
      "asset": 5902810,
      "principal": 2300000,
      "profit": 3602810,
      "profitRate": 1.5664391304347827,
      "reportedDailyChange": 115284,
      "source": "excel_import"
    },
    {
      "date": "2026-04-04",
      "channelId": "ideco_gold",
      "asset": 5902810,
      "principal": 2300000,
      "profit": 3602810,
      "profitRate": 1.5664391304347827,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-04-05",
      "channelId": "ideco_gold",
      "asset": 5902810,
      "principal": 2300000,
      "profit": 3602810,
      "profitRate": 1.5664391304347827,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-04-06",
      "channelId": "ideco_gold",
      "asset": 5872401,
      "principal": 2300000,
      "profit": 3572401,
      "profitRate": 1.5532178260869565,
      "reportedDailyChange": -30409,
      "source": "excel_import"
    },
    {
      "date": "2026-04-07",
      "channelId": "ideco_gold",
      "asset": 5848761,
      "principal": 2300000,
      "profit": 3548761,
      "profitRate": 1.5429395652173914,
      "reportedDailyChange": -23640,
      "source": "excel_import"
    },
    {
      "date": "2026-04-08",
      "channelId": "ideco_gold",
      "asset": 5922076,
      "principal": 2300000,
      "profit": 3622076,
      "profitRate": 1.574815652173913,
      "reportedDailyChange": 73315,
      "source": "excel_import"
    },
    {
      "date": "2026-04-09",
      "channelId": "ideco_gold",
      "asset": 5952068,
      "principal": 2300000,
      "profit": 3652068,
      "profitRate": 1.5878556521739131,
      "reportedDailyChange": 29992,
      "source": "excel_import"
    },
    {
      "date": "2026-04-10",
      "channelId": "ideco_gold",
      "asset": 5952068,
      "principal": 2300000,
      "profit": 3652068,
      "profitRate": 1.5878556521739131,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-04-11",
      "channelId": "ideco_gold",
      "asset": 5952068,
      "principal": 2300000,
      "profit": 3652068,
      "profitRate": 1.5878556521739131,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-04-12",
      "channelId": "ideco_gold",
      "asset": 5952068,
      "principal": 2300000,
      "profit": 3652068,
      "profitRate": 1.5878556521739131,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-04-13",
      "channelId": "ideco_gold",
      "asset": 5945299,
      "principal": 2300000,
      "profit": 3645299,
      "profitRate": 1.5849126086956522,
      "reportedDailyChange": -6769,
      "source": "excel_import"
    },
    {
      "date": "2026-04-14",
      "channelId": "ideco_gold",
      "asset": 6011243,
      "principal": 2323000,
      "profit": 3688243,
      "profitRate": 1.5877068445975033,
      "reportedDailyChange": 65944,
      "source": "excel_import"
    },
    {
      "date": "2026-04-15",
      "channelId": "ideco_gold",
      "asset": 6086092,
      "principal": 2323000,
      "profit": 3763092,
      "profitRate": 1.6199276797244941,
      "reportedDailyChange": 74849,
      "source": "excel_import"
    },
    {
      "date": "2026-04-16",
      "channelId": "ideco_gold",
      "asset": 6076788,
      "principal": 2323000,
      "profit": 3753788,
      "profitRate": 1.6159225139905296,
      "reportedDailyChange": -9304,
      "source": "excel_import"
    },
    {
      "date": "2026-04-17",
      "channelId": "ideco_gold",
      "asset": 6041140,
      "principal": 2323000,
      "profit": 3718140,
      "profitRate": 1.600576840292725,
      "reportedDailyChange": -35648,
      "source": "excel_import"
    },
    {
      "date": "2026-04-18",
      "channelId": "ideco_gold",
      "asset": 6025041,
      "principal": 2323000,
      "profit": 3702041,
      "profitRate": 1.5936465777012483,
      "reportedDailyChange": -16099,
      "source": "excel_import"
    },
    {
      "date": "2026-04-19",
      "channelId": "ideco_gold",
      "asset": 6018455,
      "principal": 2323000,
      "profit": 3695455,
      "profitRate": 1.5908114507102884,
      "reportedDailyChange": -6586,
      "source": "excel_import"
    },
    {
      "date": "2026-04-20",
      "channelId": "ideco_gold",
      "asset": 5997234,
      "principal": 2323000,
      "profit": 3674234,
      "profitRate": 1.5816762806715454,
      "reportedDailyChange": -21221,
      "source": "excel_import"
    },
    {
      "date": "2026-04-21",
      "channelId": "ideco_gold",
      "asset": 5961587,
      "principal": 2323000,
      "profit": 3638587,
      "profitRate": 1.5663310374515713,
      "reportedDailyChange": -35647,
      "source": "excel_import"
    },
    {
      "date": "2026-04-22",
      "channelId": "ideco_gold",
      "asset": 5898341,
      "principal": 2323000,
      "profit": 3575341,
      "profitRate": 1.5391050365906156,
      "reportedDailyChange": -63246,
      "source": "excel_import"
    },
    {
      "date": "2026-04-23",
      "channelId": "ideco_gold",
      "asset": 5898341,
      "principal": 2323000,
      "profit": 3575341,
      "profitRate": 1.5391050365906156,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-04-24",
      "channelId": "ideco_gold",
      "asset": 5898341,
      "principal": 2323000,
      "profit": 3575341,
      "profitRate": 1.5391050365906156,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-04-25",
      "channelId": "ideco_gold",
      "asset": 5898341,
      "principal": 2323000,
      "profit": 3575341,
      "profitRate": 1.5391050365906156,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-04-26",
      "channelId": "ideco_gold",
      "asset": 5898341,
      "principal": 2323000,
      "profit": 3575341,
      "profitRate": 1.5391050365906156,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-04-27",
      "channelId": "ideco_gold",
      "asset": 5944129,
      "principal": 2323000,
      "profit": 3621129,
      "profitRate": 1.5588157554885924,
      "reportedDailyChange": 45788,
      "source": "excel_import"
    },
    {
      "date": "2026-04-28",
      "channelId": "ideco_gold",
      "asset": 5846700,
      "principal": 2323000,
      "profit": 3523700,
      "profitRate": 1.516874730951356,
      "reportedDailyChange": -97429,
      "source": "excel_import"
    },
    {
      "date": "2026-04-29",
      "channelId": "ideco_gold",
      "asset": 5846700,
      "principal": 2323000,
      "profit": 3523700,
      "profitRate": 1.516874730951356,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-04-30",
      "channelId": "ideco_gold",
      "asset": 5796522,
      "principal": 2323000,
      "profit": 3473522,
      "profitRate": 1.4952742143779596,
      "reportedDailyChange": -50178,
      "source": "excel_import"
    },
    {
      "date": "2026-05-01",
      "channelId": "ideco_gold",
      "asset": 5727945,
      "principal": 2323000,
      "profit": 3404945,
      "profitRate": 1.4657533362031856,
      "reportedDailyChange": -68577,
      "source": "excel_import"
    },
    {
      "date": "2026-05-02",
      "channelId": "ideco_gold",
      "asset": 5727945,
      "principal": 2323000,
      "profit": 3404945,
      "profitRate": 1.4657533362031856,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-05-03",
      "channelId": "ideco_gold",
      "asset": 5727945,
      "principal": 2323000,
      "profit": 3404945,
      "profitRate": 1.4657533362031856,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-05-04",
      "channelId": "ideco_gold",
      "asset": 5727945,
      "principal": 2323000,
      "profit": 3404945,
      "profitRate": 1.4657533362031856,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-05-05",
      "channelId": "ideco_gold",
      "asset": 5727945,
      "principal": 2323000,
      "profit": 3404945,
      "profitRate": 1.4657533362031856,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-05-06",
      "channelId": "ideco_gold",
      "asset": 5727945,
      "principal": 2323000,
      "profit": 3404945,
      "profitRate": 1.4657533362031856,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-05-07",
      "channelId": "ideco_gold",
      "asset": 5843250,
      "principal": 2323000,
      "profit": 3520250,
      "profitRate": 1.5153895824365045,
      "reportedDailyChange": 115305,
      "source": "excel_import"
    },
    {
      "date": "2026-05-08",
      "channelId": "ideco_gold",
      "asset": 5878688,
      "principal": 2323000,
      "profit": 3555688,
      "profitRate": 1.5306448557899268,
      "reportedDailyChange": 35438,
      "source": "excel_import"
    },
    {
      "date": "2026-05-09",
      "channelId": "ideco_gold",
      "asset": 5878688,
      "principal": 2323000,
      "profit": 3555688,
      "profitRate": 1.5306448557899268,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-05-10",
      "channelId": "ideco_gold",
      "asset": 5878688,
      "principal": 2323000,
      "profit": 3555688,
      "profitRate": 1.5306448557899268,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-05-11",
      "channelId": "ideco_gold",
      "asset": 5802062,
      "principal": 2323000,
      "profit": 3479062,
      "profitRate": 1.4976590615583298,
      "reportedDailyChange": -76626,
      "source": "excel_import"
    },
    {
      "date": "2026-05-12",
      "channelId": "ideco_gold",
      "asset": 5838859,
      "principal": 2323000,
      "profit": 3515859,
      "profitRate": 1.5134993542832544,
      "reportedDailyChange": 36797,
      "source": "excel_import"
    },
    {
      "date": "2026-05-13",
      "channelId": "ideco_gold",
      "asset": 5840009,
      "principal": 2323000,
      "profit": 3517009,
      "profitRate": 1.513994403788205,
      "reportedDailyChange": 1150,
      "source": "excel_import"
    },
    {
      "date": "2026-05-14",
      "channelId": "ideco_gold",
      "asset": 5840009,
      "principal": 2323000,
      "profit": 3517009,
      "profitRate": 1.513994403788205,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-05-15",
      "channelId": "ideco_gold",
      "asset": 5718745,
      "principal": 2323000,
      "profit": 3395745,
      "profitRate": 1.4617929401635816,
      "reportedDailyChange": -121264,
      "source": "excel_import"
    },
    {
      "date": "2026-05-16",
      "channelId": "ideco_gold",
      "asset": 5718745,
      "principal": 2323000,
      "profit": 3395745,
      "profitRate": 1.4617929401635816,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-05-17",
      "channelId": "ideco_gold",
      "asset": 5718745,
      "principal": 2323000,
      "profit": 3395745,
      "profitRate": 1.4617929401635816,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-05-18",
      "channelId": "ideco_gold",
      "asset": 5669822,
      "principal": 2323000,
      "profit": 3346822,
      "profitRate": 1.4407326732673267,
      "reportedDailyChange": -48923,
      "source": "excel_import"
    },
    {
      "date": "2026-05-19",
      "channelId": "ideco_gold",
      "asset": 5689475,
      "principal": 2323000,
      "profit": 3366475,
      "profitRate": 1.4491928540680155,
      "reportedDailyChange": 19653,
      "source": "excel_import"
    },
    {
      "date": "2026-05-20",
      "channelId": "ideco_gold",
      "asset": 5608288,
      "principal": 2346000,
      "profit": 3262288,
      "profitRate": 1.3905745950554134,
      "reportedDailyChange": -81187,
      "source": "excel_import"
    },
    {
      "date": "2026-05-21",
      "channelId": "ideco_gold",
      "asset": 5687329,
      "principal": 2346000,
      "profit": 3341329,
      "profitRate": 1.424266410912191,
      "reportedDailyChange": 79041,
      "source": "excel_import"
    },
    {
      "date": "2026-05-22",
      "channelId": "ideco_gold",
      "asset": 5683235,
      "principal": 2346000,
      "profit": 3337235,
      "profitRate": 1.4225213128729752,
      "reportedDailyChange": -4094,
      "source": "excel_import"
    },
    {
      "date": "2026-05-23",
      "channelId": "ideco_gold",
      "asset": 5683235,
      "principal": 2346000,
      "profit": 3337235,
      "profitRate": 1.4225213128729752,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-05-24",
      "channelId": "ideco_gold",
      "asset": 5683235,
      "principal": 2346000,
      "profit": 3337235,
      "profitRate": 1.4225213128729752,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-05-25",
      "channelId": "ideco_gold",
      "asset": 5664447,
      "principal": 2346000,
      "profit": 3318447,
      "profitRate": 1.414512787723785,
      "reportedDailyChange": -18788,
      "source": "excel_import"
    },
    {
      "date": "2026-05-26",
      "channelId": "ideco_gold",
      "asset": 5664447,
      "principal": 2346000,
      "profit": 3318447,
      "profitRate": 1.414512787723785,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-05-27",
      "channelId": "ideco_gold",
      "asset": 5521799,
      "principal": 2346000,
      "profit": 3175799,
      "profitRate": 1.3537080136402386,
      "reportedDailyChange": -142648,
      "source": "excel_import"
    },
    {
      "date": "2026-05-28",
      "channelId": "ideco_gold",
      "asset": 5521799,
      "principal": 2346000,
      "profit": 3175799,
      "profitRate": 1.3537080136402386,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-05-29",
      "channelId": "ideco_gold",
      "asset": 5683865,
      "principal": 2346000,
      "profit": 3337865,
      "profitRate": 1.4227898550724638,
      "reportedDailyChange": 162066,
      "source": "excel_import"
    },
    {
      "date": "2026-05-30",
      "channelId": "ideco_gold",
      "asset": 5683865,
      "principal": 2346000,
      "profit": 3337865,
      "profitRate": 1.4227898550724638,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-05-31",
      "channelId": "ideco_gold",
      "asset": 5683865,
      "principal": 2346000,
      "profit": 3337865,
      "profitRate": 1.4227898550724638,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-06-01",
      "channelId": "ideco_gold",
      "asset": 5683865,
      "principal": 2346000,
      "profit": 3337865,
      "profitRate": 1.4227898550724638,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-06-02",
      "channelId": "ideco_gold",
      "asset": 5708742,
      "principal": 2346000,
      "profit": 3362742,
      "profitRate": 1.4333938618925832,
      "reportedDailyChange": 24877,
      "source": "excel_import"
    },
    {
      "date": "2026-06-03",
      "channelId": "ideco_gold",
      "asset": 5641249,
      "principal": 2346000,
      "profit": 3295249,
      "profitRate": 1.4046244671781756,
      "reportedDailyChange": -67493,
      "source": "excel_import"
    },
    {
      "date": "2026-06-04",
      "channelId": "ideco_gold",
      "asset": 5650276,
      "principal": 2346000,
      "profit": 3304276,
      "profitRate": 1.4084722932651321,
      "reportedDailyChange": 9027,
      "source": "excel_import"
    },
    {
      "date": "2026-06-05",
      "channelId": "ideco_gold",
      "asset": 5641039,
      "principal": 2346000,
      "profit": 3295039,
      "profitRate": 1.4045349531116795,
      "reportedDailyChange": -9237,
      "source": "excel_import"
    },
    {
      "date": "2026-06-06",
      "channelId": "ideco_gold",
      "asset": 5641039,
      "principal": 2346000,
      "profit": 3295039,
      "profitRate": 1.4045349531116795,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-06-07",
      "channelId": "ideco_gold",
      "asset": 5641039,
      "principal": 2346000,
      "profit": 3295039,
      "profitRate": 1.4045349531116795,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-06-08",
      "channelId": "ideco_gold",
      "asset": 5463858,
      "principal": 2346000,
      "profit": 3117858,
      "profitRate": 1.329010230179028,
      "reportedDailyChange": -177181,
      "source": "excel_import"
    },
    {
      "date": "2026-06-09",
      "channelId": "ideco_gold",
      "asset": 5475719,
      "principal": 2346000,
      "profit": 3129719,
      "profitRate": 1.3340660699062235,
      "reportedDailyChange": 11861,
      "source": "excel_import"
    },
    {
      "date": "2026-06-10",
      "channelId": "ideco_gold",
      "asset": 5334331,
      "principal": 2346000,
      "profit": 2988331,
      "profitRate": 1.273798380221654,
      "reportedDailyChange": -141388,
      "source": "excel_import"
    },
    {
      "date": "2026-06-11",
      "channelId": "ideco_gold",
      "asset": 5164917,
      "principal": 2346000,
      "profit": 2818917,
      "profitRate": 1.201584398976982,
      "reportedDailyChange": -169414,
      "source": "excel_import"
    },
    {
      "date": "2026-06-12",
      "channelId": "ideco_gold",
      "asset": 5276009,
      "principal": 2346000,
      "profit": 2930009,
      "profitRate": 1.2489381926683718,
      "reportedDailyChange": 111092,
      "source": "excel_import"
    },
    {
      "date": "2026-06-13",
      "channelId": "ideco_gold",
      "asset": 5276009,
      "principal": 2346000,
      "profit": 2930009,
      "profitRate": 1.2489381926683718,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-06-14",
      "channelId": "ideco_gold",
      "asset": 5276009,
      "principal": 2346000,
      "profit": 2930009,
      "profitRate": 1.2489381926683718,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-06-15",
      "channelId": "ideco_gold",
      "asset": 5467558,
      "principal": 2346000,
      "profit": 3121558,
      "profitRate": 1.3305873827791987,
      "reportedDailyChange": 191549,
      "source": "excel_import"
    },
    {
      "date": "2026-06-16",
      "channelId": "ideco_gold",
      "asset": 5474094,
      "principal": 2346000,
      "profit": 3128094,
      "profitRate": 1.3333734015345269,
      "reportedDailyChange": 6536,
      "source": "excel_import"
    },
    {
      "date": "2026-06-17",
      "channelId": "ideco_gold",
      "asset": 5491277,
      "principal": 2346000,
      "profit": 3145277,
      "profitRate": 1.3406977834612106,
      "reportedDailyChange": 17183,
      "source": "excel_import"
    },
    {
      "date": "2026-06-18",
      "channelId": "ideco_gold",
      "asset": 5471353,
      "principal": 2346000,
      "profit": 3125353,
      "profitRate": 1.3322050298380221,
      "reportedDailyChange": -19924,
      "source": "excel_import"
    },
    {
      "date": "2026-06-19",
      "channelId": "ideco_gold",
      "asset": 5288556,
      "principal": 2346000,
      "profit": 2942556,
      "profitRate": 1.2542864450127877,
      "reportedDailyChange": -182797,
      "source": "excel_import"
    },
    {
      "date": "2026-06-20",
      "channelId": "ideco_gold",
      "asset": 5288556,
      "principal": 2346000,
      "profit": 2942556,
      "profitRate": 1.2542864450127877,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-06-21",
      "channelId": "ideco_gold",
      "asset": 5288556,
      "principal": 2346000,
      "profit": 2942556,
      "profitRate": 1.2542864450127877,
      "reportedDailyChange": 0,
      "source": "excel_import"
    },
    {
      "date": "2026-06-22",
      "channelId": "ideco_gold",
      "asset": 5357184,
      "principal": 2346000,
      "profit": 3011184,
      "profitRate": 1.283539641943734,
      "reportedDailyChange": 68628,
      "source": "excel_import"
    },
    {
      "date": "2026-06-23",
      "channelId": "ideco_gold",
      "asset": 5282969,
      "principal": 2346000,
      "profit": 2936969,
      "profitRate": 1.2519049445865302,
      "reportedDailyChange": -74215,
      "source": "excel_import"
    },
    {
      "date": "2026-06-24",
      "channelId": "ideco_gold",
      "asset": 5219295,
      "principal": 2346000,
      "profit": 2873295,
      "profitRate": 1.2247634271099743,
      "reportedDailyChange": -63674,
      "source": "excel_import"
    }
  ],
  "holdingsDaily": [],
  "marketMemos": [
    {
      "date": "2026-06-25",
      "summary": "マイクロン決算を受けてAI・半導体関連が急反発。日経平均も大きく反発した。",
      "relation": "AI関連へ資金が戻るリスクオン寄りの動き。楽天のAI観測枠には追い風になりやすい一方、金は短期的に調整しやすい地合い。",
      "learning": "同じ相場でも、金・世界株・米国株・個別株では反応が違う。資産グループを分けて見ると、資金の流れが見えやすくなる。",
      "tags": [
        "AI",
        "半導体",
        "マイクロン",
        "リスクオン"
      ],
      "confidence": 0.75,
      "source": "conversation"
    }
  ],
  "channelMemos": [
    {
      "date": "2026-06-25",
      "channelId": "ideco_gold",
      "comment": "金は高値圏で調整中。株式市場へ資金が戻る日は、安全資産である金が短期的に売られやすい。",
      "learning": "金は守りの資産として使われることが多いが、株と必ず逆に動くわけではない。",
      "confidence": 0.7,
      "source": "ai"
    },
    {
      "date": "2026-06-25",
      "channelId": "saison_nisa",
      "comment": "世界株分散のため、特定テーマの急落・急騰を比較的ならして受け止めやすい。",
      "learning": "分散投資は大きく跳ねにくい代わりに、特定テーマの揺れを抑える効果がある。",
      "confidence": 0.65,
      "source": "ai"
    },
    {
      "date": "2026-06-25",
      "channelId": "rakuten",
      "comment": "マイクロン決算をきっかけにAI・半導体関連が買い戻され、VTIやJX金属に追い風となりやすい地合い。",
      "learning": "AI相場ではGPUだけでなく、メモリ・素材・電線など周辺企業にも資金が波及する。",
      "confidence": 0.75,
      "source": "ai"
    }
  ]
};

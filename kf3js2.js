"use strict"

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
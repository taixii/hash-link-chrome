import firebase from 'firebase/app';
import 'firebase/database';

// Firebase 초기화 설정
const firebaseConfig = {
    apiKey: "AIzaSyBybRuFtg4gmhvLbqasCDUYtcBxRkW6yAo",
    authDomain: "hash-link.firebaseapp.com",
    projectId: "hash-link",
    storageBucket: "hash-link.appspot.com",
    messagingSenderId: "357095374223",
    appId: "1:357095374223:web:1afe0a35ce019630985ffa",
    measurementId: "G-K7GKNJ7XKV",
};

// Firebase 초기화
firebase.initializeApp(firebaseConfig);

// Firebase 데이터베이스 참조 가져오기
const database = firebase.database();

// 해시태그-URL 쌍을 Firebase에 전송하는 함수
export const sendHashTagUrlPair = (hashTag: string, url: string) => {
  const hashTagUrlRef = database.ref('hashTagUrlPairs');
  
  // 새로운 데이터 객체 생성
  const newPair = {
    hashTag,
    url,
  };

  // Firebase에 데이터 추가
  hashTagUrlRef.push(newPair)
    .then(() => {
      console.log('HashTag-URL pair sent to Firebase successfully.');
    })
    .catch((error) => {
      console.error('Error sending HashTag-URL pair to Firebase:', error);
    });
};

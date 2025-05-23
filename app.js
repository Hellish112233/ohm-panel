// پیکربندی Firebase شما
const firebaseConfig = {
  apiKey: "AIzaSyDY0KuYHpnHfWkwVhO9SsvD5515jnecs_M",
  authDomain: "ohm-control-f98fd.firebaseapp.com",
  databaseURL: "https://ohm-control-f98fd-default-rtdb.firebaseio.com",
  projectId: "ohm-control-f98fd",
  storageBucket: "ohm-control-f98fd.firebasestorage.app",
  messagingSenderId: "821043063133",
  appId: "1:821043063133:web:f9a76698b6ba5ee441a0b4"
};

// راه‌اندازی Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.database();

const statusEl = document.getElementById('status');
const deviceListEl = document.getElementById('deviceList');

// فرض بر این است که اطلاعات دستگاه‌ها در مسیر "devices" ذخیره می‌شوند
const devicesRef = db.ref('devices');

devicesRef.on('value', snapshot => {
    const devices = snapshot.val();
    deviceListEl.innerHTML = '';

    if (devices) {
        for (const deviceId in devices) {
            const li = document.createElement('li');
            li.textContent = `دستگاه: ${deviceId}`;
            deviceListEl.appendChild(li);
        }
        statusEl.textContent = 'دستگاه‌ها بارگذاری شدند.';
    } else {
        statusEl.textContent = 'دستگاهی پیدا نشد.';
    }
});

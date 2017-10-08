var currentTheme = '';

const themes = {
  'day': {
    images: {
      headerURL: 'sun.jpg',
    },
    colors: {
      accentcolor: '#CF723F',
      textcolor: '#111',
    }
  },
  'night': {
    images: {
      headerURL: 'moon.jpg',
    },
    colors: {
      accentcolor: '#000',
      textcolor: '#fff',
    }
  }
};

function setTheme(theme) {
  if (currentTheme === theme) {
    
    return;
  }
  currentTheme = theme;
  browser.theme.update(themes[theme]);
}

function checkTime() {
  let date = new Date();
  let hours = date.getHours();
  // Will set the sun theme between 8am and 8pm.
  if ((hours > 8) && (hours < 20)) {
    setTheme('day');
  } else {
    setTheme('night');
  }
}

checkTime();

browser.alarms.onAlarm.addListener(checkTime);
browser.alarms.create('checkTime', {periodInMinutes: 5});

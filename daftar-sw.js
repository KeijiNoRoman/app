    if ('serviceWorker' in navigator) {
      console.log("Will service worker register?");
      navigator.serviceWorker.register('https://cdn.jsdelivr.net/gh/KeijiNoRoman/app@knr/service-worker.js').then(function(reg){
        console.log("Yes it did.");
      }).catch(function(err) {
        console.log("No it didn't. This happened: ", err)
      });
    }

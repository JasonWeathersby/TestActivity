(function () {
    // Handle Pick Activity
    navigator.mozSetMessageHandler('activity', function (activityRequest) {
        var option = activityRequest.source;

        if (option.name === "pick") {
            alert(" got it "); // Do something to handle the activity
        }
    });
    // Test using Wrong App Name
    var testactivity1 = document.querySelector("#testactivity1");
    if (testactivity1) {
        testactivity1.onclick = function () {


            var pick = new MozActivity({
                name: "pick",
                data: {
                    type: "image/*",
                    appname: "xyz" 
                }
            });

            pick.onsuccess = function () { 
                var img = document.createElement("img");
                img.src = window.URL.createObjectURL(this.result.blob);
                var imagePresenter = document.querySelector("#image-presenter");
                imagePresenter.appendChild(img);
                imagePresenter.style.display = "block";
            };

            pick.onerror = function () { 
                alert("Can't view the image!");
            };
        };
    }
    // Test using No App Name    
    var testactivity2 = document.querySelector("#testactivity2");
    if (testactivity2) {
        testactivity2.onclick = function () {
            var pick = new MozActivity({
                name: "pick",
                data: {
                    type: "image/*" 
                }
            });

            pick.onsuccess = function () { 
                var img = document.createElement("img");
                img.src = window.URL.createObjectURL(this.result.blob);
                var imagePresenter = document.querySelector("#image-presenter");
                imagePresenter.appendChild(img);
                imagePresenter.style.display = "block";
            };

            pick.onerror = function () { 
                alert("Can't view the image!");
            };
        };
    }
    // Test using Correct App Name
    var testactivity3 = document.querySelector("#testactivity3");
    if (testactivity3) {
        testactivity3.onclick = function () {
            var pick = new MozActivity({
                name: "pick",
                data: {
                    type: "image/*",
                    appname: "abc" 
                }
            });

            pick.onsuccess = function () { 
                var img = document.createElement("img");
                img.src = window.URL.createObjectURL(this.result.blob);
                var imagePresenter = document.querySelector("#image-presenter");
                imagePresenter.appendChild(img);
                imagePresenter.style.display = "block";
            };

            pick.onerror = function () { 
                alert("Can't view the image!");
            };
        };
    }
})();
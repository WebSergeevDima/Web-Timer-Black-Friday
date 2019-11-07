"use strict"
    ; (function () {

        const configuration = {
            closeButton: true, //Показывать кнопку для закрытия
            closeSave: true, //Сохранить закрытие баннера
        }

        const currentTimeZone = new Date().getTimezoneOffset() * 60 * 1000
        const init = document.querySelector('[data-timer-time]')
        let interval

        function timerInit() {

            let addNull = function (number) {
                if (number.length == 1) {
                    number = "0" + number
                }
                return number
            }

            const dateFinish = new Date(init.getAttribute('data-timer-time'))
            const dateTimer = new Date(dateFinish - new Date() + currentTimeZone)

            if (dateTimer.getTime() <= 0) {
                init.style.display = 'none'
            } else {
                init.style.display = 'block'
            }

            let dateTimerSeconds = addNull(String(dateTimer.getSeconds())).split('')
            let dateTimerMinutes = addNull(String(dateTimer.getMinutes())).split('')
            let dateTimerHours = addNull(String(dateTimer.getHours())).split('');
            let dateTimerDays = addNull(String(Math.floor(dateTimer.getTime() / 1000 / 60 / 60 / 24))).split('')

            document.querySelectorAll('[data-timer="second"]')[0].innerHTML = dateTimerSeconds[0]
            document.querySelectorAll('[data-timer="second"]')[1].innerHTML = dateTimerSeconds[1]
            document.querySelectorAll('[data-timer="minute"]')[0].innerHTML = dateTimerMinutes[0]
            document.querySelectorAll('[data-timer="minute"]')[1].innerHTML = dateTimerMinutes[1]
            document.querySelectorAll('[data-timer="hour"]')[0].innerHTML = dateTimerHours[0]
            document.querySelectorAll('[data-timer="hour"]')[1].innerHTML = dateTimerHours[1]
            document.querySelectorAll('[data-timer="day"]')[0].innerHTML = dateTimerDays[0]
            document.querySelectorAll('[data-timer="day"]')[1].innerHTML = dateTimerDays[1]
        }

        document.querySelector('[data-timer="close"]').addEventListener('click', function () {
            if (configuration.closeSave) {
                localStorage.setItem('data-timer-time', 0);
            }
            clearInterval(interval);
            this.closest('[data-timer-time]').remove();
        })

        if (init && !localStorage.getItem('data-timer-time')) {
            if (!configuration.closeButton) {
                document.querySelector('[data-timer="close"]').remove()
            }
            init.style.display = 'none'
            interval = setInterval(timerInit, 1000)
        }

    })();
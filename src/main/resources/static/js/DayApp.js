/**
 * Created by sooglejay on 17/11/19.
 */
var DayApp = function () {
    this.workDaysPerWeek = 5;
    this.secondsPerDay = 24 * 60 * 60 * 1000;
    this.currentWorkDaysList = new Array();
};


/**
 *  Sunday 0
 *  Monday 1
 *  Tuesday 1
 *  Wednesday 1
 *  Thursday 1
 *  Friday 1
 *  Saturday 1
 * @param date
 * @returns {Array}
 */
DayApp.prototype.getWorkDaysList = function (date) {
    var milliseconds = date.getTime();
    var repackDays = date.getDay() - 1;
    if (repackDays == -1) {
        milliseconds += this.secondsPerDay;
    } else {
        while (repackDays) {
            milliseconds -= this.secondsPerDay;
            repackDays--;
        }
    }
    date.setTime(milliseconds);
    for (var i = 0; i < this.workDaysPerWeek; i++) {
        this.currentWorkDaysList[i] = new Date(date);
        milliseconds += this.secondsPerDay;
        date.setTime(milliseconds);
    }
    return this.currentWorkDaysList;
};
DayApp.prototype.getNextWorkDaysList = function () {
    for (var i = 0; i <= this.currentWorkDaysList.length; i++) {
        if (this.currentWorkDaysList[i] instanceof Date) {
            var m = this.currentWorkDaysList[i].getTime();
            for (var w = 1; w <= 7; w++) {
                m += this.secondsPerDay;
            }
            this.currentWorkDaysList[i] = new Date(m);
        }
    }
    return this.currentWorkDaysList;
};
DayApp.prototype.getPreWorkDaysList = function () {
    for (var i = 0; i <= this.currentWorkDaysList.length; i++) {
        if (this.currentWorkDaysList[i] instanceof Date) {
            var m = this.currentWorkDaysList[i].getTime();
            for (var w = 1; w <= 7; w++) {
                m -= this.secondsPerDay;
            }
            this.currentWorkDaysList[i] = new Date(m);
        }
    }
    return this.currentWorkDaysList;

};


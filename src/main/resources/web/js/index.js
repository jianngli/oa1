/**
 * Created by sooglejay on 17/11/19.
 */
function initWorkingDays(daysList) {
    for (var i = 0; i < daysList.length; i++) {
        var d = daysList[i];
        $("#label_day_" + (i + 1)).html((d.getMonth() + 1) + "/" + d.getDate());
    }
}

function initDaysSelector(daysList, jj) {
    $("#sel_day_" + jj).empty();
    ajaxWrapper('../../controller/MainApp.php', 'POST', {
        'time': daysList[jj - 1].getTime()
    }, function (e) {
        if (e.code == 200) {
            var hS = e['hours'];
            if (hS > 1) {
                hS = hS + ' hours';
            } else {
                hS = hS + 'hour';
            }
            $("#sel_day_" + jj).append("<option value=" + e['hours'] + ">" + hS + "</option>");
        }else{

        }
    });
}

function editDaysSelector() {
    var hS = '';
    for (var i = 1; i <= 5; i++) {
        $("#sel_day_" + i).empty();
        for (var hours = 1; hours <= 8; hours++) {
            if (hours > 1) {
                hS = 'hours';
            } else {
                hS = 'hour';
            }
            $("#sel_day_" + i).append("<option value=" + hours + ">" + hours + " " + hS + "</option>");
        }
    }
}

function getFormattedTimeSir(date) {
    if (date instanceof Date) {
        return (date.getMonth() + 1) + "/" + (date.getDate()) + "/" + (date.getFullYear());
    }
    return "Class Type Not Match Date";
}

function init(daysList) {
    // 根据本函数参数daysList来初始化UI
    initWorkingDays(daysList);
    $("#timeRanger").html(getFormattedTimeSir(daysList[0]) + "-" + getFormattedTimeSir(daysList[daysList.length - 1]));
    // 根据网络请求 初始化 selector
    initDaysSelector(daysList);
}
$(function () {
    var dayApp = new DayApp();
    var daysList = dayApp.getWorkDaysList(new Date());
    init(daysList);

    $("#btnPreWeek").click(function () {
        var preWeekDaysList = dayApp.getPreWorkDaysList();
        init(preWeekDaysList);
    });

    $("#btnNextWeek").click(function () {
        var nextWeekDaysList = dayApp.getNextWorkDaysList();
        init(nextWeekDaysList);
    });
});
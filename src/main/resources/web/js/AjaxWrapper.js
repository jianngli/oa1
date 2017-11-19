/**
 * Created by sooglejay on 17/11/19.
 */

function ajaxWrapper(url, method, data, successCallback, errorCallback) {
    $.ajax({
        method: method,
        url: url,
        data: data,
        success: function (e) {
            if (typeof successCallback == 'function') {
                successCallback(e);
            }
        },
        error: function (e) {
            if (typeof errorCallback == 'function') {
                errorCallback(e);
            }
        }
    });
}
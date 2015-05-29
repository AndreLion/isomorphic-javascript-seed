/**
 * Created by andliu2 on 5/29/15.
 */

$.fn.form = function(option){
    var form = $(this);
    var data = {}
    form.find('input[type="text"],input[type="email"],input[type="password"]').each(function(index,n){
        var node = $(n);
        data[node.attr('name')] = node.val();
    })
    $.ajax({
        url:form.attr('action'),
        data:data,
        method:form.attr('method'),
        dataType:'json',
        success:option.success,
        error:option.error,
        complete:option.complete
    })
}


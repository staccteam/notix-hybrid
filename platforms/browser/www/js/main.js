$(function() {
    $('select').material_select();
    $.ajax({
        url:'http://hcetnotix.azurewebsites.net/process/getBranches',
        type:'POST',
        dataType: 'json',
        success: function( json ) {
            $ip = $('#studentRegForm_branchSelect');
            $.each(json, function(i, value) {
                $('#studentRegForm_branchSelect').append('<option value=' + value.branch + '>' + value.branch + '</option>');
            });
            $ip.prop("disabled", false);
            $ip.material_select();
        }
    });
});
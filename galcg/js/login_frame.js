   // 弹窗
    function showWindow() {
        $('#login_frame').show();  //显示弹窗
        $('#close').show();  //显示弹窗
        $('#location').show();  //显示弹窗
        $('#cover').css('display', 'block'); //显示遮罩层
        $('#cover').css('height', '100%'); //设置遮罩层的高度为当前页面高度
        $('#location').css('z-index', '10'); //设置遮罩层的高度为当前页面高度
    }

    // 关闭弹窗
    function closeWindow() {
        $('#login_frame').hide();  //隐藏弹窗
        $('#close').hide();  //隐藏弹窗
        $('#location').hide();  //隐藏弹窗
        $('#cover').css('display', 'none');   //显示遮罩层
        $('#location').css('z-index', '0'); //设置遮罩层的高度为当前页面高度
    }

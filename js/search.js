var  __search = {
    is_first_load: false,
    /* 根据分类搜索 */
    search_method: function() {
        var content = $('#search_content').val(),
              $this = $(this),
              search_method = $this.attr('id');
        /* 防止点击一个分类以后重复刷新 */
        if($('.search_class .on').attr('id') == search_method) return;
        $('.search_class a').removeClass('on');
        $this.addClass('on');
        __base.add_engine_menu(search_method);
        __base.first_load(content,  search_method);
    },
    /* 根据引擎搜索 */
    search_menu_engine: function() {
        var content = $('#search_content').val(),
              $this = $(this),
              engine = $this.attr('engine'),
              search_method = $('.search_class .on').attr('id'),
              curr_engine = $this.attr('engine');
         /* 防止点击一个分类以后重复刷新 */
        if($('.search_menu .curr').attr('engine') == curr_engine) {
            if(!__search.is_first_load) {
                __search.is_first_load = true;
                __base.second_load(content, search_method, engine);
            }
            return;
        };
        $('.search_menu_engine').removeClass('curr');
        $this.addClass('curr');
        __base.second_load(content, search_method, engine);
    },
    /* 搜索按钮 */
    search_btn: function() {
        var content = $('#search_content').val(),
            search_method = $('.search_class .on').attr('id') || 'web';
        __base.first_load(content, search_method);
    },
    /* 回车提交数据 */
    enter_to_search: function(e) {
        var keyCode = e.keyCode || e.which;
        if(keyCode == 13) {
             __search.search_btn();
        }
     },
    /* 展开和收起 */
    upordown: function(direction) {
        var $this = $('.upordown'),
            animate_type = typeof direction == 'number' ? 1 : 0;
        if(animate_type || $this.text() == '展开>>') {
            $this.show().attr('title', '关闭搜索↓').text('关闭搜索↓');
        } else {
            $this.hide();
        }
        __base.animate_switch_div(animate_type);
    },
    /* 初始化页面 */
    init: function() {
        __base.resize();
        __base.add_engine_menu('web');
    }
}
$(function() {
    $(document)
    .on('click', '.search_web, .search_image',  __search.search_method)
    .on('click', '.search_menu_engine', __search.search_menu_engine)
    .on('click', '#search_btn', __search.search_btn)
    .on('keydown input', '#search_content', __search.enter_to_search)
    .on('click', '.upordown', __search.upordown);
    $(window).resize(function(){
        __base.resize();
    })
    __search.init();
})

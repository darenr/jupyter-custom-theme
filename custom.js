if($(IPython.toolbar.selector.concat(' > #kill-run-all')).length == 0){
  IPython.toolbar.add_buttons_group([
        {
             'label'   : 'kill-run-all',
             'icon'    : 'fa fa-window-close',
             'callback': function(){
                 IPython.notebook.kernel.restart();
                 $(IPython.events).one('kernel_ready.Kernel',
                    function(){IPython.notebook.execute_all_cells();});
             }
        }
    ], 'kill-run-all');
}
if($(IPython.toolbar.selector.concat(' > #run-all')).length == 0){
  IPython.toolbar.add_buttons_group([
        {
             'label'   : 'run-all',
             'icon'    : 'fa fa-chevron-circle-right',
             'callback': function(){
                IPython.notebook.execute_all_cells();
            }
        }
    ], 'run-all');
}

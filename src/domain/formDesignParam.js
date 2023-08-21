/**
 * 表单设计参数对象
 */
class FormDesignParam{
    /**
     *
     * @param modalEvent 弹窗事件 {@link modalEvent}
     * @param modal 弹窗对象 {@link bootstrap.Modal}
     * @param data 给弹窗的数据
     */
    constructor(modalEvent, modal, data) {
        this.dialogEvent = modalEvent;
        this.modal = modal;
        this.data = data;
    }
}

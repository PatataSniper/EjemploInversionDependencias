class mainClass {
    constructor() {
        this.__init();
        this.__initUI();
    }

    __init() {
        this.__childElems = [
            new childClass(1, "Mensaje #1", "Responsabilidades bien definidas.", this.onClickItem.bind(this)),
            new childClass(2, "Mensaje #2", "Entidades sin dependencia intrínseca.", this.onClickItem.bind(this)),
            new childClass(3, "Mensaje #3", "Clases fácilmente reutilizables.", this.onClickItem.bind(this))
        ]

        this.__name = "Buzón de mensajes";
    }

    __initUI() {
        $('.main-data-name').prepend(this.name);
    }

    get $countBadge() {
        return $('[class="badge bg-warning text-dark"]');
    }
    
    get name() {
        return this.__name;
    }

    //#region Handlers
    onClickItem(count) {
        this.$countBadge.text(count);
    }
    //#endregion Handlers
}
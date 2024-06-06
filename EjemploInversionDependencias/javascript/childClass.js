class childClass {
    constructor(id, name, details, clickResolver) {
        this.__init(id, name, details, clickResolver);
        this.__initUI();
    }

    __init(id, name, details, clickResolver) {
        this.__id = id;
        this.__name = name;
        this.__details = details;
        this.__clickResolver = clickResolver;
    }

    __initUI() {
        // Add the UI row to the html page
        this.__appendRow();

        // Initialize event handlers
        this.__initEvents();
    }

    __appendRow() {
        $('.list-group').append(this.__$generateRow());
    }
    
    __$generateRow() {
        return new $(
            `<a id='item-${this.__id}' href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                <img src="Assets/logo_score.png" alt="twbs" width="32" height="32" class="rounded-circle flex-shrink-0">
                <div class="d-flex gap-2 w-100 justify-content-between">
                    <div>
                        <h6 class="mb-0">${this.__name}</h6>
                        <p class="mb-0 opacity-75">${this.__details}</p>
                    </div>
                    <small class="opacity-50 text-nowrap">now</small>
                </div>
            </a>`
        );
    }
}
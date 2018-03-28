const Main = {
    init() {
        document.addEventListener('DOMContentLoaded', this.onLoad.bind(this));
    },
    onLoad() {
        let section = document.createElement('section');
        section.setAttribute('data-component', 'hero');
        document.body.appendChild(section);

        setTimeout(() => {
            let section = document.createElement('section');
            section.setAttribute('data-component', 'dyno');
            document.body.appendChild(section);
        }, 5000);
    }
};
Main.init();
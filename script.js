const App = {};
App.placeHolder = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati assumenda delectus laudantium ad animi repellat cumque ex praesentium placeat quibusdam nam laborum perspiciatis quod dicta, perferendis itaque. Laborum esse modi distinctio impedit porro, blanditiis beatae dignissimos, magni voluptatibus hic labore illo architecto ipsum facere eos commodi! Quis autem eligendi veritatis.";

App.menuDisplay = () => {
    App.menuButton.addEventListener('click', () => {
        App.menu.style.display = App.menu.style.display === 'flex' ? 'none' : 'flex';
    });
}

App.init = () => {
    App.menuButton = document.querySelector('.menuIcon');
    App.header = document.querySelector('.homeHeader');
    App.menu = document.querySelector('.menu');
    App.menuDisplay();

    console.log('init called');
}
App.init();
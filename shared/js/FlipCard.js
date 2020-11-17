import { Component, render, h } from "preact";
import FlipIcon from "./FlipIcon";

export default class FlipCard extends Component {

    componentWillMount() {
        this.setState({'flipped': false});
    }

    handeClick() {
        this.setState({'flipped': !this.state.flipped});
    }

    render(props, state) {
        console.log(props);
        const img = `<%= path %>/card_${props.id}.svg`;
        return (
            <div class={ `flipcard ${state.flipped? 'active': ''}`} data-id={props.id}>
                <div class="card-body">
                    <div class="back">
                        <div class="content">
                            <div class="border"></div>
                            <div dangerouslySetInnerHTML={{__html: props.back}}></div>
                        </div>
                        <button class="flip" onclick={this.handeClick.bind(this)}><FlipIcon/></button>
                    </div>
                    <div class="front">
                        <div class="content">
                            <div class="border"></div>
                            <img src={img} alt="" class={props.imagePos} />
                            <h2 dangerouslySetInnerHTML={{__html: props.front}}></h2>
                        </div>
                        <button class="flip" onclick={this.handeClick.bind(this)}><FlipIcon/></button>
                    </div>
                </div>
            </div>
        )
    }
}
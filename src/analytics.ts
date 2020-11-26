import * as $ from "jquery";

function createAnalitics() {
    let counter: number = 0;
    let destroyed: boolean = false
    const listener = (): number => {
        return counter++;
    }
    $(document).on("click", listener);

    return {
        destroy(): void {
            $(document).off("click", listener);
            destroyed = true
        },
        getClicks(): number | string {
            if (destroyed) return "Analytics destroyed. Total clicks: " + counter;
            return counter;
        }
    }
}

window["analitics"] = createAnalitics();
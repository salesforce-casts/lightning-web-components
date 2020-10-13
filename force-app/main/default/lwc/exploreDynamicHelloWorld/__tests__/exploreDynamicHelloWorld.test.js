import { createElement } from "lwc";
import ExploreDynamicHelloWorld from "c/exploreDynamicHelloWorld";

describe("c-explore-dynamic-hello-world", () => {
  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it("displaying dynamic hello world", () => {
    const element = createElement("c-explore-dynamic-hello-world", {
      is: ExploreDynamicHelloWorld
    });
    document.body.appendChild(element);

    element.shadowRoot.querySelector(".dynaGreeting").click();

    return Promise.resolve().then(() => {
      const greet = element.shadowRoot.querySelector(".userName");
      expect(greet.textContent).toBe("Hello World!!");
    });
  });
  it("new value is not null", () => {
    const element = createElement("c-explore-dynamic-hello-world", {
      is: ExploreDynamicHelloWorld
    });
    document.body.appendChild(element);

    element.shadowRoot.querySelector(".dynaGreeting").click();

    return Promise.resolve().then(() => {
      const greet = element.shadowRoot.querySelector(".userName");
      expect(greet.textContent).not.toBeNull();
    });
  });
});

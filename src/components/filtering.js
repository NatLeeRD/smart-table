/*import {createComparison, defaultRules} from "../lib/compare.js";

// @todo: #4.3 — настроить компаратор

export function initFiltering(elements, indexes) {
    // @todo: #4.1 — заполнить выпадающие списки опциями

    return (data, state, action) => {
        // @todo: #4.2 — обработать очистку поля

        // @todo: #4.5 — отфильтровать данные используя компаратор
        return data;
    }
}*/

/*import {createComparison, defaultRules} from "../lib/compare.js";

const compare = createComparison(defaultRules);

export function initFiltering(elements, indexes) {

    Object.keys(indexes)
        .forEach((elementName) => {
            elements[elementName].append(
                ...Object.values(indexes[elementName])
                    .map(name => {
                        const option = document.createElement('option');
                        option.value = name;
                        option.textContent = name;
                        return option;
                    })
            );
        });

    return (data, state, action) => {

        if (action && action.name === 'clear') {
            const input = action.parentElement.querySelector('input');

            if (input) {
                input.value = '';
            }

            state[action.dataset.field] = '';
        }

        return data.filter(row => compare(row, state));
    }
}*/

import { createComparison, defaultRules } from "../lib/compare.js";

const compare = createComparison(defaultRules);

export function initFiltering(elements, indexes) {

    Object.keys(indexes).forEach((name) => {
        elements[name].append(
            ...Object.values(indexes[name]).map(value => {
                const option = document.createElement("option");
                option.value = value;
                option.textContent = value;
                return option;
            })
        );
    });

    return (data, state, action) => {

        // reset
        if (action && action.name === "clear") {
            const input = action.parentElement.querySelector("input");
            if (input) input.value = "";

            state[action.dataset.field] = "";
        }

        const normalizedState = {
            ...state,
            total: [
                state.totalFrom,
                state.totalTo
            ]
        };

        return data.filter(row => compare(row, normalizedState));
    };
}
const options = {
    Y: { regex: '([0-9]+)', setter: 'setFullYear', correction: 0 },
    m: { regex: '([0-9]+)', setter: 'setMonth', correction: 1 },
    d: { regex: '([0-9]+)', setter: 'setDate', correction: 0 },
    H: { regex: '([0-9]+)', setter: 'setHours', correction: 0 },
    i: { regex: '([0-9]+)', setter: 'setMinutes', correction: 0 },
    s: { regex: '([0-9]+)', setter: 'SetSeconds', correction: 0 },
};

export { options };

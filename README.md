# Fishbone-chart-aurelia

## WIP

Fishbone chart custom element for aurelia 

## Usage

On the desired view, import the custom element and use it as follows:

```html

<template>
    <require from="./fishbone-chart/fishbone-chart"></require>

    <div>
        <fishbone-chart data.bind="myChartData"></fishbone-chart>
    </div>
</template>

```

The data should be structured as follows:

```javascript
export class App {
    myChartData = {
        'Slow Network': {
            'Infrastructure': ['Outdated hardware', 'Inadequate bandwidth provision', 'Congested network'],
            'Configuration': ['Misconfigured firewall', 'Improper routing rules', 'QoS settings not optimized'],
            'Service Provider': ['Throttling', 'Unreliable service', 'Poor coverage'],
            'Client Devices': ['Too many background applications', 'Hardware limitations', 'Out-of-date drivers'],
            'Usage Patterns': ['High traffic during peak hours', 'Unscheduled backups', 'Streaming high-resolution media'],
        },
        'Software Bugs': {
            'Codebase': ['Legacy code issues', 'Lack of unit tests', 'Spaghetti code'],
            'Development Practices': ['No code reviews', 'Rushed releases', 'Insufficient testing'],
            'Tooling': ['Outdated development tools', 'Lack of error tracking software'],
            'Team Skills': ['Unfamiliar with technology stack', 'Inadequate domain knowledge'],
            'Documentation': ['Outdated documentation', 'Lack of onboarding materials for new developers'],
        },
        'Employee Turnover': {
            'Management': ['Lack of recognition', 'Ineffective leadership', 'Poor communication'],
            'Compensation': ['Below market salary', 'Inadequate benefits package', 'Rare bonuses'],
            'Career Growth': ['Limited promotion opportunities', 'Lack of professional development'],
            'Work Environment': ['Excessive overtime', 'Toxic team culture', 'High stress levels'],
            'Work-Life Balance': ['Inflexible work hours', 'No remote work options', 'Insufficient vacation days'],
        },
    };
}
```

## Result of the data above

![Slow Network](https://i.imgur.com/LEFncIM.png)
![Software Bugs](https://i.imgur.com/XGpJAiq.png)
![Employee turnover](https://i.imgur.com/KhI9NB9.png)

# Node.js Event-Driven Architecture 

This repository contains a basic example of implementing event-driven architecture in a Node.js application. 

## Overview

Event-driven architecture is a design pattern in which components of a system communicate with each other by emitting and listening for events. In this example, we demonstrate the use of three main components:

1. **Event Emitter**: Emits events when certain actions occur within the application.
2. **Event Listener**: Listens for specific events emitted by the Event Emitter.
3. **Event Handler**: Handles the events triggered by the Event Emitter by executing callback functions.

## File Structure

- **index.js**: Contains the main server logic demonstrating event-driven architecture.
- **module/**
  - **replaceHtml.js**: Module for replacing HTML content dynamically.
  - **user.js**: Example of creating a custom class inheriting from EventEmitter.
- **data.json**: Sample JSON data used in the application.
- **product-details.html**: HTML template for displaying product details.
- **product-list.html**: HTML template for displaying a list of products.

## Running the Application

To run the application locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies by running `npm install`.
4. Start the server by running `node index.js`.
5. Open a web browser and visit `http://localhost:8080` to access the application.

## Usage

- Access the homepage at `/` or `/home`.
- Navigate to `/about` or `/contact` for sample pages.
- View product listings at `/products`.
- View product details by appending `?id=<product_id>` to the product URL.

## Custom Events

The example also demonstrates the creation of custom events using Node.js's built-in `events` module. Check the `user.js` file for an example of creating a custom class that inherits from `EventEmitter` to handle custom events.


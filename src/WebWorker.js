export default class WebWorker {
    constructor(worker) {
    // Convert the provided worker function to a string
        const code = worker.toString();
    // Create a Blob containing the worker code
        const blob = new Blob(['('+code+')()']);
    // Create a new Web Worker using the Blob's URL
        return new Worker(URL.createObjectURL(blob));
    }
}

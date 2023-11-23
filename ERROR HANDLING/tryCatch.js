try {
    let x = undefined;
    console.log(x[0]);

} catch (err) {
    console.log("error handling in cathch", err);

} finally {
    console.log("finally always get executed");
}
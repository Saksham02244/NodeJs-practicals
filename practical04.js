var fs = require("fs");

// 1.append file
fs.appendFile("text.txt", "this data is appended at the end\n", function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Data appended successfully.");

        // 2.write file(overwrite)
        fs.writeFile("text.txt", "welcome to cse department", function(err) {
            if (err) {
                console.log(err);
            } else {
                console.log("File content overwritten.");

                // 3.rename file
                fs.rename("text.txt", "abc.txt", function(err) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("File renamed successfully.");

                        // 4.delete file
                        fs.unlink("abc.txt", function(err) {
                            if (err) {
                                console.log(err);
                            } else {
                                console.log("File deleted successfully.");
                            }
                        });

                    }
                });

            }
        });

    }
});
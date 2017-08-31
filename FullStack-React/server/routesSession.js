import configMongoose from "./configMongoose";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import jwtSecret from "./configSecret";

const User = configMongoose.User;
export default [
  {
    route: ["login"],
    call: (callPath, args) => {
      const { username, password } = args[0];
      const saltedPassword = `password${pubApp}`;
      // pubApp is our salt string
      const saltedPassHash = crypto
        .createHash("sha256")
        .update(saltedPassword)
        .digest("hex");
      const userStatementQuery = {
        $and: [{ username: username }, { password: password }]
      };

      return User.find(userStatementQuery, function(err, user) {
        if (err) throw err;
      }).then(result => {
        if (result.length) {
          const role = result[0].role;
          const userDetailsToHash = username + role;
          const token = jwt.sign(userDetailsToHash, jwtSecret.secret);

          retrn[
            ({
              path: ["login", "token"],
              value: token
            },
            {
              path: ["login", "username"],
              value: username
            },
            {
              path: ["login", "role"],
              value: role
            },
            {
              path: ["login", "error"],
              value: false
            })
          ];
        } else {
          return [
            {
              path: ["login", "token"],
              value: "INVALID"
            },
            {
              path: ["login", "error"],
              value: "NO USER FOUND,incorrect login info"
            }
          ];
        }
        return result;
      });
    }
  }
];

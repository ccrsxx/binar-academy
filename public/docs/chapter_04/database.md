# Database

## Definition

- DBMS is a software that allows you to create and manage databases. It stands for Database Management System.
- SQL and NoSQL are two types of DBMS.
- SQL is a relational database management system. It is based on the relational model.
- NoSQL is a non-relational database management system. It is based on the key-value pair model.
- SQL and NO SQL structures:
  - SQL: Tables
  - NoSQL: Collections
  - SQL: Rows
  - NoSQL: Documents
  - SQL: Columns
  - NoSQL: Fields
- SQL are vertically scalable. It means that you can increase the load on a single server by increasing things like RAM, SSD, or CPU.
- NoSQL are horizontally scalable. It means that you can increase the number of servers to handle the load.
- SQL is not dynamic. It means that you have to define the schema before you start using it.
- NoSQL is dynamic. It means that you don't have to define the schema before you start using it.
- ERD is a diagram that shows the relationship between entities in a database. so basically it shows the relationship between tables. Much like the documentation of a database

## Types of relationships

- One to one: A single record in a table is related to a single record in another table.
- One to many: A single record in a table is related to multiple records in another table.
- Many to many: Multiple records in a table are related to multiple records in another table.
- Example of one to one relationship:
  - A person has one passport.
  - A passport belongs to one person.
- Example of one to many relationship:
  - A person has many books.
  - A book belongs to one person.
- Example of many to many relationship:
  - A person has many books.
  - A book belongs to many persons.
- Difference between one to many and many to many:
  - In one to many, a record in a table can be related to multiple records in another table. But a record in another table can be related to only one record in the first table.
  - In many to many, a record in a table can be related to multiple records in another table. And a record in another table can be related to multiple records in the first table.

## Querying

- Types of queries:
  - DDL: Data Definition Language. Used to define the database schema.
  - DQL: Data Query Language. Used to query data from the database.
  - DML: Data Manipulation Language. Used to manipulate data in the database.
  - DCL: Data Control Language. Used to control access to data in the database.
- DDL commands:
  - CREATE: Used to create a new database or table. For example, creating a new table.
  - ALTER: Used to modify the structure of an existing database or table. For example, adding a new column to an existing table.
  - DROP: Used to delete an existing database or table. For example, deleting an existing table.
  - TRUNCATE: Used to delete all records from a table. For example, deleting all records from a table.
- DML commands:
  - SELECT: Used to retrieve data from a database. For example, retrieving data from a table.
  - INSERT: Used to insert new data into a database. For example, inserting new data into a table.
  - UPDATE: Used to update existing data in a database. For example, updating existing data in a table.
  - DELETE: Used to delete existing data from a database. For example, deleting existing data from a table.
- DCL commands:
  - GRANT: Used to grant access to a database. For example, granting access to a database.
  - REVOKE: Used to revoke access to a database. For example, revoking access to a database.
- TCL commands:
  - BEGIN: Used to start a transaction. For example, starting a transaction.
  - COMMIT: Used to save a transaction. For example, saving a transaction.
  - ROLLBACK: Used to undo a transaction. For example, undoing a transaction.
- Database naming conventions:
  - Use lowercase letters.
  - Use underscores to separate words.
  - Don't use spaces.
  - Don't use special characters.
  - Don't use reserved keywords.
- Table naming conventions:
  - Use lowercase letters.
  - Use underscores to separate words.
  - Don't use spaces.
  - Don't use special characters.
  - Don't use reserved keywords.
  - Use singular nouns.

## Examples

- Adding a new column to an existing table:
  - `ALTER TABLE table_name ADD column_name data_type;`
- Deleting an existing table:
  - `DROP TABLE table_name;`
- Deleting all records from a table:
  - `TRUNCATE TABLE table_name;`
- Retrieving data from a table:
  - `SELECT column_name FROM table_name;`
- Inserting new data into a table:
  - `INSERT INTO table_name (column_name) VALUES (value);`

## Querying Example

- DML

  - INSERT
    Simple insert

    ```sql
    INSERT INTO table_name (column_name) VALUES (value);
    ```

    You can also insert multiple values at once

    ```sql
    INSERT INTO table_name (column_name) VALUES (value1), (value2), (value3);
    ```

  - SELECT
    Select all columns

    ```sql
    SELECT * FROM table_name;
    ```

    Select specific columns

    ```sql
    SELECT column_name FROM table_name;
    ```

    Select specific columns and rename them

    ```sql
    SELECT column_name AS new_name FROM table_name;
    ```

    Using where clause

    ```sql
    SELECT column_name FROM table_name WHERE condition;
    ```

    Using where clause with multiple conditions

    ```sql
    SELECT column_name FROM table_name WHERE condition1 AND condition2;
    ```

    Using order by clause

    ```sql
    SELECT column_name FROM table_name ORDER BY column_name;
    ```

    Using group by clause

    ```sql
    SELECT count(id), column_name FROM table_name GROUP BY column_name;
    ```

  - UPDATE

    ```sql
    UPDATE table_name SET column_name = value WHERE condition;
    ```

  - DELETE

    ```sql
    DELETE FROM table_name WHERE condition;
    ```

## ORM

- ORM stands for Object Relational Mapping.
- ORM is a technique that allows you to query and manipulate data from a database using an object-oriented paradigm.
- ORM is a programming technique that maps the object to the data stored in the database.
- ORM has a method to map objects to the data stored in the database.
- ORM Features:
  - Migration. It allows you to create and modify the database schema using code.
  - Models. It allows you to model the database schema using code.
  - Seeder. It allows you to populate the database with test data.

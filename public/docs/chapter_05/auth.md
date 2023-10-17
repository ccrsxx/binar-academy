# Authorization and OAuth

## Description

This document describes the authorization and authentication process for the API. It includes the following registration, credential management, and authorization processes.

## How does login work?

The login process is a three-step process:

1. The user enters their username and password into the login form and submits it.
1. The server validates the credentials and returns a session token.
1. The client stores the session token and uses it to authenticate all future requests.

## How server validates the password?

The server uses the following algorithm to validate the password:

1. The server store the password in the database as a hash.
1. The server receives the password from the client.
1. The server hashes the password using the same algorithm as the one used to store the password.
1. The server compares the hash with the one stored in the database.

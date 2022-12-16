Changelog
=========
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

[Unreleased]
------------
### Added
- Added `h4()` function.

### Changed
- Change over to [ES Modules](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c) from CommonJS.
- The `MdWriter` class no longer exists. Instead what used to be it's methods are now individual exports.
- Updated the "Usage" section of the `README.md` file.

[0.3.0] - 2022-12-16
--------------------
### Added
- Added `MdWriter.fencedJsCodeBlock()` method.
- Added `MdWriter.fencedTsCodeBlock()` method.

### Changed
- The `MdWriter.fencedShCodeBlock()` method no longer prefixes the code with a dollar sign.

[0.2.0] - 2017-09-30
--------------------
### Added
- Added `MdWriter.codeSpan()` method.
- Added `MdWriter.h3()` method.
- Added "Reference" section to the `README.md` file.

### Changed
- Made the project description more specific in the readme and manifest.

0.1.0 - 2017-09-30
------------------
### Added
- Initial release.

[Unreleased]: https://github.com/jbenner-radham/node-md-writer/compare/v0.3.0...HEAD
[0.3.0]: https://github.com/jbenner-radham/node-md-writer/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/jbenner-radham/node-md-writer/compare/v0.1.0...v0.2.0

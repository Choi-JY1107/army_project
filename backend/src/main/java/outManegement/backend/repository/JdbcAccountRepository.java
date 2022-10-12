package outManegement.backend.repository;

import outManegement.backend.dao.Account;

import javax.sql.DataSource;
import java.util.List;
import java.util.Optional;

public class JdbcAccountRepository implements AccountRepository {
    private final DataSource dataSource;

    public JdbcAccountRepository(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    @Override
    public Long save(Account account) {
        return 1L;
    }

    @Override
    public Optional<Account> findById(Long id) {
        return Optional.empty();
    }

    @Override
    public Optional<Account> findByName(String name) {
        return Optional.empty();
    }

    @Override
    public List<Account> findAllMember() {
        return null;
    }

    @Override
    public void clearAll() {

    }

    @Override
    public void deleteById(Long id) {

    }

    @Override
    public Optional<Account> updateAccount(Long id) {
        return Optional.empty();
    }
}

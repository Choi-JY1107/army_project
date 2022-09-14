package outManegement.backend.domain.repository;

import org.springframework.stereotype.Component;
import outManegement.backend.domain.Account;

import javax.sql.DataSource;
import java.util.List;
import java.util.Optional;

public class JdbcMemberRepository implements MemberRepository{
    private final DataSource dataSource;

    public JdbcMemberRepository(DataSource dataSource) {
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
}
